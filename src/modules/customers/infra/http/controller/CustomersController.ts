import { Request, Response } from 'express';

import CreateCustomerService from

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    const newCustomer = await createCustomer.execute({ name, email });

    return response.json(newCustomer);
  }
}
