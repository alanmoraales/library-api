import { BadRequestException, UseGuards } from '@nestjs/common';
import { Context, Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtGraphQLGuard } from 'auth/guards';
import { BooksService } from 'books/books.service';
import { Cart } from 'carts/entities';
import { Request as ExpressRequest } from 'express';
import { User } from './entities';
import { UserResponse } from './interfaces';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private userService: UsersService,
    private booksService: BooksService,
  ) {}

  @Query(() => UserResponse)
  @UseGuards(JwtGraphQLGuard)
  me(@Context('req') req: ExpressRequest) {
    return req.user;
  }

  @Query(() => Cart)
  @UseGuards(JwtGraphQLGuard)
  async cart(@Context('req') req: ExpressRequest) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    return userCart;
  }

  @Mutation(() => Cart)
  @UseGuards(JwtGraphQLGuard)
  async addBookToCart(
    @Context('req') req: ExpressRequest,
    @Args('bookId') bookId: number,
    @Args('quantity') quantity: number,
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

  @Mutation(() => Cart)
  @UseGuards(JwtGraphQLGuard)
  async removeBookFromCart(
    @Context('req') req: ExpressRequest,
    @Args('bookId') bookId: number,
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
