import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
  BadRequestException,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'auth/guards';
import { BooksService } from 'books/books.service';
import { Request as ExpressRequest } from 'express';
import { AddBookToCartDto, RemoveBookFormCartDto } from './dtos';
import { User } from './entities';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private booksService: BooksService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req: ExpressRequest) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('cart')
  async getUserCart(@Request() req: ExpressRequest) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    return userCart;
  }

  @UseGuards(JwtAuthGuard)
  @Post('cart')
  async addBookToCart(
    @Request() req: ExpressRequest,
    @Body() { bookId, quantity }: AddBookToCartDto,
  ) {
    const user = req.user as User;
    const book = await this.booksService.findOneById(bookId);
    if (!(quantity <= book.availableQuantity)) {
      throw new BadRequestException(
        'No hay suficientes piezas disponibles de este libro',
      );
    }
    const userCart = await this.userService.findUserCart(user.id);
    const cartItemWithBookInCart = userCart.items.find(
      (cartItem) => cartItem.book.id === bookId,
    );
    const cartItem =
      cartItemWithBookInCart ||
      (await this.userService.createAndSaveCartItem({
        book,
        cart: userCart,
        quantity,
      }));
    if (cartItemWithBookInCart) {
      cartItem.quantity = cartItem.quantity + quantity;
      await this.userService.saveCartItem(cartItem);
    }
    book.availableQuantity = book.availableQuantity - quantity;
    await this.booksService.saveBook(book);
    return await this.userService.findUserCart(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('cart')
  async removeBookFromCart(
    @Request() req: ExpressRequest,
    @Body() { bookId }: RemoveBookFormCartDto,
  ) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    const cartItemWithBookInCart = userCart.items.find(
      (cartItem) => cartItem.book.id === bookId,
    );
    if (cartItemWithBookInCart) {
      const book = await this.booksService.findOneById(bookId);
      book.availableQuantity =
        book.availableQuantity + cartItemWithBookInCart.quantity;
      await this.booksService.saveBook(book);
      await this.userService.removeCartItem(cartItemWithBookInCart);
    }
    return await this.userService.findUserCart(user.id);
  }
}
