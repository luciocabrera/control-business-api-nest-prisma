import { Prisma } from '@prisma/client';

export function decimalToNumber(
  value: Prisma.Decimal | null
): number | undefined {
  return value === null ? undefined : new Prisma.Decimal(value).toNumber();
}
