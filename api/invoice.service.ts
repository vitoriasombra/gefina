type InvoiceStatus = 'paid' | 'pending';

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: {
    id: number;
    name: string;
    email: string;
  };
}
// todos os dados que fatura deve ter

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
      id: 1,
      name: 'Contrutora Meridiano',
      email: 'contato@meridiano.com.br'
    }
  },
  {
    id: 2,
    amount: 128396,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-10-2026',
    customer: {
      id: 1,
      name: 'Gráfica Nova',
      email: 'nova@grafica.com.br'
    }
  },
  {
    id: 3,
    amount: 4504899,
    status: 'paid',
    issueDate: '01-09-2026',
    dueDate: '05-11-2026',
    customer: {
      id: 3,
      name: 'Todos por um',
      email: 'comercial@todosporum.com.br'
    }
  }
];

export function findAllInvoices() {
  return invoices;
}

export function findInvoiceById(id: number) {
  return invoices.find((element) => element.id === id);
}
