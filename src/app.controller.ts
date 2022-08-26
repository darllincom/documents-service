import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DocumentDTO } from './dtos/document.dto';

@Controller()
export class AppController {
  private logger = new Logger('Controller');

  constructor(private readonly service: AppService) {}

  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.service.findByID(id);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() documentDTO: DocumentDTO) {
    return this.service.create(documentDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() documentDTO: DocumentDTO) {
    return this.service.update(id, documentDTO);
  }
}
