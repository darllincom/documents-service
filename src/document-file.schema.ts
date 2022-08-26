import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DocumentFile {
  @Prop({ required: false })
  Name: string;

  @Prop({ required: false })
  DocumentType: string;

  @Prop({ required: false })
  IsCertificate: boolean;

  @Prop({ required: false })
  HasDate: boolean;

  @Prop({ required: false })
  RegisterDate: string;

  @Prop({ required: false })
  ValidFrom: string;

  @Prop({ required: false })
  ValidUntil: string;

  @Prop({ required: false })
  Location: string;

  @Prop({ required: false })
  Key: string;

  @Prop({ required: false })
  ETag: string;
}

export type DocumentFileMongo = DocumentFile & Document;

export const DocumentFileSchema = SchemaFactory.createForClass(DocumentFile);
