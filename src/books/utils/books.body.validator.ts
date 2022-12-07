import { Request } from "express"

export function invalidBody(req: Request) {
  const book = {
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    color: req.body.color,
  };

  const jsonBook = JSON.stringify(book)
  const jsonBody = JSON.stringify(req.body)

  if (jsonBook !== jsonBody) {
    return true
  }

  return false
}
