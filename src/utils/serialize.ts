import {
  ClassConstructor,
  ClassTransformOptions,
  plainToInstance
} from 'class-transformer';

export function serialize<T, V>(
  cls: ClassConstructor<T>,
  plain: V[],
  options?: ClassTransformOptions
): T[];
export function serialize<T, V>(
  cls: ClassConstructor<T>,
  plain: V,
  options?: ClassTransformOptions
): T;

export function serialize<T, V>(
  cls: ClassConstructor<T>,
  plain: V | V[],
  options?: ClassTransformOptions
): T | T[] {
  return plainToInstance(cls, plain, {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
    ...options
  });
}
