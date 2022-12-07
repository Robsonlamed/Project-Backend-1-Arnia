import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { BooksService } from "../service/books.service";

export class BooksController { 
  constructor(private readonly booksService: BooksService) {}

  async getAll(req: Request, res: Response) {
    
    const { author } = req.query;

    if(author){
    const bookAuthor = await this.booksService.getAll(author as string)
    return res.status(StatusCode.OK).json(bookAuthor);
    }
 

    const result = await this.booksService.getAll(author as string);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.booksService.getById(id);

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async create(req: Request, res: Response) {

    const { body } = req

    const result = await this.booksService.create(body);
    if ("promiseError" in result) {
      // console.log(result)
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async update(req: Request, res: Response) {
    // req.body -> Body/JSON
    // req.params -> URL Params
    // req.query  -> Query Params

    const { id } = req.params;
    const { body } = req;

    const result = await this.booksService.update(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const result = await this.booksService.updateStatus(id, body)
    
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

}
