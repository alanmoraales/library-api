import { BadRequestException, Injectable } from '@nestjs/common';
import { MailerService as NodemailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private mailer: NodemailerService) {}

  async sendReservationEmail(
    targetEmail: string,
    username: string,
    qrCode: string,
  ) {
    try {
      await this.mailer.sendMail({
        to: targetEmail,
        subject: 'Tu Reserva de Libros',
        template: 'reserve-confirmation',
        context: {
          username,
        },
        // @ts-ignore
        attachments: [
          {
            filename: 'qr-code.png',
            path: qrCode,
            cid: 'qrCode',
          },
        ],
      });
    } catch (error) {
      throw new BadRequestException(
        `No se pudo enviar el correo de confirmación a ${targetEmail}`,
      );
    }
  }
}
