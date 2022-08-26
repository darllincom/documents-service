import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentFileMongo } from './document-file.schema';
import { DocumentDTO } from './dtos/document.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Documents') private model: Model<DocumentFileMongo>,
  ) {}

  async findByID(id: string) {
    return await this.model.findById(id);
  }

  async findAll() {
    return await this.model.find();
  }

  async create(documentDTO: DocumentDTO) {
    const {
      DocumentType,
      ETag,
      HasDate,
      IsCertificate,
      Key,
      Location,
      Name,
      RegisterDate,
      ValidFrom,
      ValidUntil,
    } = documentDTO;

    try {
      const documentCreated = await this.model.create({
        DocumentType,
        ETag,
        HasDate,
        IsCertificate,
        Key,
        Location,
        Name,
        RegisterDate,
        ValidFrom,
        ValidUntil,
      });

      await documentCreated.save();

      return documentCreated;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, documentoDTO: DocumentDTO) {
    try {
      const updated = await this.model.findByIdAndUpdate(id, documentoDTO);

      await updated.save();

      return updated;
    } catch (error) {
      console.log(error);
    }
  }
}
