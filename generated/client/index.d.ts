
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Studio
 * 
 */
export type Studio = $Result.DefaultSelection<Prisma.$StudioPayload>
/**
 * Model RedemptionPlatform
 * 
 */
export type RedemptionPlatform = $Result.DefaultSelection<Prisma.$RedemptionPlatformPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model MovieCode
 * 
 */
export type MovieCode = $Result.DefaultSelection<Prisma.$MovieCodePayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model CodePlatformAvailability
 * 
 */
export type CodePlatformAvailability = $Result.DefaultSelection<Prisma.$CodePlatformAvailabilityPayload>
/**
 * Model ValidationHistory
 * 
 */
export type ValidationHistory = $Result.DefaultSelection<Prisma.$ValidationHistoryPayload>
/**
 * Model ErrorLog
 * 
 */
export type ErrorLog = $Result.DefaultSelection<Prisma.$ErrorLogPayload>
/**
 * Model RecheckSchedule
 * 
 */
export type RecheckSchedule = $Result.DefaultSelection<Prisma.$RecheckSchedulePayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Quality: {
  FourK: '4K',
  HD: 'HD',
  SD: 'SD',
  UHD: 'UHD'
};

export type Quality = (typeof Quality)[keyof typeof Quality]


export const CodeStatus: {
  Ready: 'Ready',
  OutOfStock: 'Out of Stock',
  Pending: 'Pending',
  Sold: 'Sold',
  Invalid: 'Invalid'
};

export type CodeStatus = (typeof CodeStatus)[keyof typeof CodeStatus]


export const Priority: {
  Low: 'Low',
  Normal: 'Normal',
  High: 'High',
  Urgent: 'Urgent'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Quality = $Enums.Quality

export const Quality: typeof $Enums.Quality

export type CodeStatus = $Enums.CodeStatus

export const CodeStatus: typeof $Enums.CodeStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studio`: Exposes CRUD operations for the **Studio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studios
    * const studios = await prisma.studio.findMany()
    * ```
    */
  get studio(): Prisma.StudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redemptionPlatform`: Exposes CRUD operations for the **RedemptionPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedemptionPlatforms
    * const redemptionPlatforms = await prisma.redemptionPlatform.findMany()
    * ```
    */
  get redemptionPlatform(): Prisma.RedemptionPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieCode`: Exposes CRUD operations for the **MovieCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieCodes
    * const movieCodes = await prisma.movieCode.findMany()
    * ```
    */
  get movieCode(): Prisma.MovieCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codePlatformAvailability`: Exposes CRUD operations for the **CodePlatformAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodePlatformAvailabilities
    * const codePlatformAvailabilities = await prisma.codePlatformAvailability.findMany()
    * ```
    */
  get codePlatformAvailability(): Prisma.CodePlatformAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.validationHistory`: Exposes CRUD operations for the **ValidationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ValidationHistories
    * const validationHistories = await prisma.validationHistory.findMany()
    * ```
    */
  get validationHistory(): Prisma.ValidationHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.errorLog`: Exposes CRUD operations for the **ErrorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorLogs
    * const errorLogs = await prisma.errorLog.findMany()
    * ```
    */
  get errorLog(): Prisma.ErrorLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recheckSchedule`: Exposes CRUD operations for the **RecheckSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecheckSchedules
    * const recheckSchedules = await prisma.recheckSchedule.findMany()
    * ```
    */
  get recheckSchedule(): Prisma.RecheckScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vendor: 'Vendor',
    Studio: 'Studio',
    RedemptionPlatform: 'RedemptionPlatform',
    Movie: 'Movie',
    Customer: 'Customer',
    MovieCode: 'MovieCode',
    Sale: 'Sale',
    CodePlatformAvailability: 'CodePlatformAvailability',
    ValidationHistory: 'ValidationHistory',
    ErrorLog: 'ErrorLog',
    RecheckSchedule: 'RecheckSchedule',
    History: 'History'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vendor" | "studio" | "redemptionPlatform" | "movie" | "customer" | "movieCode" | "sale" | "codePlatformAvailability" | "validationHistory" | "errorLog" | "recheckSchedule" | "history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Studio: {
        payload: Prisma.$StudioPayload<ExtArgs>
        fields: Prisma.StudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          findFirst: {
            args: Prisma.StudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          findMany: {
            args: Prisma.StudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          create: {
            args: Prisma.StudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          createMany: {
            args: Prisma.StudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          delete: {
            args: Prisma.StudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          update: {
            args: Prisma.StudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          deleteMany: {
            args: Prisma.StudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          upsert: {
            args: Prisma.StudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          aggregate: {
            args: Prisma.StudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudio>
          }
          groupBy: {
            args: Prisma.StudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudioCountArgs<ExtArgs>
            result: $Utils.Optional<StudioCountAggregateOutputType> | number
          }
        }
      }
      RedemptionPlatform: {
        payload: Prisma.$RedemptionPlatformPayload<ExtArgs>
        fields: Prisma.RedemptionPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedemptionPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedemptionPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>
          }
          findFirst: {
            args: Prisma.RedemptionPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedemptionPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>
          }
          findMany: {
            args: Prisma.RedemptionPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>[]
          }
          create: {
            args: Prisma.RedemptionPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>
          }
          createMany: {
            args: Prisma.RedemptionPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedemptionPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>[]
          }
          delete: {
            args: Prisma.RedemptionPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>
          }
          update: {
            args: Prisma.RedemptionPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>
          }
          deleteMany: {
            args: Prisma.RedemptionPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedemptionPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RedemptionPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>[]
          }
          upsert: {
            args: Prisma.RedemptionPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPlatformPayload>
          }
          aggregate: {
            args: Prisma.RedemptionPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedemptionPlatform>
          }
          groupBy: {
            args: Prisma.RedemptionPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedemptionPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedemptionPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<RedemptionPlatformCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      MovieCode: {
        payload: Prisma.$MovieCodePayload<ExtArgs>
        fields: Prisma.MovieCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>
          }
          findFirst: {
            args: Prisma.MovieCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>
          }
          findMany: {
            args: Prisma.MovieCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>[]
          }
          create: {
            args: Prisma.MovieCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>
          }
          createMany: {
            args: Prisma.MovieCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>[]
          }
          delete: {
            args: Prisma.MovieCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>
          }
          update: {
            args: Prisma.MovieCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>
          }
          deleteMany: {
            args: Prisma.MovieCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>[]
          }
          upsert: {
            args: Prisma.MovieCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCodePayload>
          }
          aggregate: {
            args: Prisma.MovieCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieCode>
          }
          groupBy: {
            args: Prisma.MovieCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCodeCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCodeCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      CodePlatformAvailability: {
        payload: Prisma.$CodePlatformAvailabilityPayload<ExtArgs>
        fields: Prisma.CodePlatformAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodePlatformAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodePlatformAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.CodePlatformAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodePlatformAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>
          }
          findMany: {
            args: Prisma.CodePlatformAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>[]
          }
          create: {
            args: Prisma.CodePlatformAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>
          }
          createMany: {
            args: Prisma.CodePlatformAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodePlatformAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.CodePlatformAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>
          }
          update: {
            args: Prisma.CodePlatformAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.CodePlatformAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodePlatformAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodePlatformAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.CodePlatformAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePlatformAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.CodePlatformAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodePlatformAvailability>
          }
          groupBy: {
            args: Prisma.CodePlatformAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodePlatformAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodePlatformAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<CodePlatformAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      ValidationHistory: {
        payload: Prisma.$ValidationHistoryPayload<ExtArgs>
        fields: Prisma.ValidationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValidationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValidationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>
          }
          findFirst: {
            args: Prisma.ValidationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValidationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>
          }
          findMany: {
            args: Prisma.ValidationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>[]
          }
          create: {
            args: Prisma.ValidationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>
          }
          createMany: {
            args: Prisma.ValidationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValidationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>[]
          }
          delete: {
            args: Prisma.ValidationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>
          }
          update: {
            args: Prisma.ValidationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ValidationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValidationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValidationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ValidationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationHistoryPayload>
          }
          aggregate: {
            args: Prisma.ValidationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValidationHistory>
          }
          groupBy: {
            args: Prisma.ValidationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValidationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValidationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ValidationHistoryCountAggregateOutputType> | number
          }
        }
      }
      ErrorLog: {
        payload: Prisma.$ErrorLogPayload<ExtArgs>
        fields: Prisma.ErrorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findFirst: {
            args: Prisma.ErrorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findMany: {
            args: Prisma.ErrorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          create: {
            args: Prisma.ErrorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          createMany: {
            args: Prisma.ErrorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErrorLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          delete: {
            args: Prisma.ErrorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          update: {
            args: Prisma.ErrorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          deleteMany: {
            args: Prisma.ErrorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErrorLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          upsert: {
            args: Prisma.ErrorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          aggregate: {
            args: Prisma.ErrorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErrorLog>
          }
          groupBy: {
            args: Prisma.ErrorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorLogCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogCountAggregateOutputType> | number
          }
        }
      }
      RecheckSchedule: {
        payload: Prisma.$RecheckSchedulePayload<ExtArgs>
        fields: Prisma.RecheckScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecheckScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecheckScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>
          }
          findFirst: {
            args: Prisma.RecheckScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecheckScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>
          }
          findMany: {
            args: Prisma.RecheckScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>[]
          }
          create: {
            args: Prisma.RecheckScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>
          }
          createMany: {
            args: Prisma.RecheckScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecheckScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>[]
          }
          delete: {
            args: Prisma.RecheckScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>
          }
          update: {
            args: Prisma.RecheckScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>
          }
          deleteMany: {
            args: Prisma.RecheckScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecheckScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecheckScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>[]
          }
          upsert: {
            args: Prisma.RecheckScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecheckSchedulePayload>
          }
          aggregate: {
            args: Prisma.RecheckScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecheckSchedule>
          }
          groupBy: {
            args: Prisma.RecheckScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecheckScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecheckScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<RecheckScheduleCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    vendor?: VendorOmit
    studio?: StudioOmit
    redemptionPlatform?: RedemptionPlatformOmit
    movie?: MovieOmit
    customer?: CustomerOmit
    movieCode?: MovieCodeOmit
    sale?: SaleOmit
    codePlatformAvailability?: CodePlatformAvailabilityOmit
    validationHistory?: ValidationHistoryOmit
    errorLog?: ErrorLogOmit
    recheckSchedule?: RecheckScheduleOmit
    history?: HistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    movieCodes: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCodes?: boolean | VendorCountOutputTypeCountMovieCodesArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMovieCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCodeWhereInput
  }


  /**
   * Count Type StudioCountOutputType
   */

  export type StudioCountOutputType = {
    movies: number
    movieCodes: number
  }

  export type StudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | StudioCountOutputTypeCountMoviesArgs
    movieCodes?: boolean | StudioCountOutputTypeCountMovieCodesArgs
  }

  // Custom InputTypes
  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioCountOutputType
     */
    select?: StudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeCountMovieCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCodeWhereInput
  }


  /**
   * Count Type RedemptionPlatformCountOutputType
   */

  export type RedemptionPlatformCountOutputType = {
    availabilities: number
    validationHistory: number
    errorLogs: number
  }

  export type RedemptionPlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | RedemptionPlatformCountOutputTypeCountAvailabilitiesArgs
    validationHistory?: boolean | RedemptionPlatformCountOutputTypeCountValidationHistoryArgs
    errorLogs?: boolean | RedemptionPlatformCountOutputTypeCountErrorLogsArgs
  }

  // Custom InputTypes
  /**
   * RedemptionPlatformCountOutputType without action
   */
  export type RedemptionPlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatformCountOutputType
     */
    select?: RedemptionPlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RedemptionPlatformCountOutputType without action
   */
  export type RedemptionPlatformCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodePlatformAvailabilityWhereInput
  }

  /**
   * RedemptionPlatformCountOutputType without action
   */
  export type RedemptionPlatformCountOutputTypeCountValidationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidationHistoryWhereInput
  }

  /**
   * RedemptionPlatformCountOutputType without action
   */
  export type RedemptionPlatformCountOutputTypeCountErrorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    movieCodes: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCodes?: boolean | MovieCountOutputTypeCountMovieCodesArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCodeWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sales: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomerCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type MovieCodeCountOutputType
   */

  export type MovieCodeCountOutputType = {
    movies: number
    availabilities: number
    validationHistory: number
    errorLogs: number
    recheckSchedules: number
  }

  export type MovieCodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieCodeCountOutputTypeCountMoviesArgs
    availabilities?: boolean | MovieCodeCountOutputTypeCountAvailabilitiesArgs
    validationHistory?: boolean | MovieCodeCountOutputTypeCountValidationHistoryArgs
    errorLogs?: boolean | MovieCodeCountOutputTypeCountErrorLogsArgs
    recheckSchedules?: boolean | MovieCodeCountOutputTypeCountRecheckSchedulesArgs
  }

  // Custom InputTypes
  /**
   * MovieCodeCountOutputType without action
   */
  export type MovieCodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCodeCountOutputType
     */
    select?: MovieCodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCodeCountOutputType without action
   */
  export type MovieCodeCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * MovieCodeCountOutputType without action
   */
  export type MovieCodeCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodePlatformAvailabilityWhereInput
  }

  /**
   * MovieCodeCountOutputType without action
   */
  export type MovieCodeCountOutputTypeCountValidationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidationHistoryWhereInput
  }

  /**
   * MovieCodeCountOutputType without action
   */
  export type MovieCodeCountOutputTypeCountErrorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
  }

  /**
   * MovieCodeCountOutputType without action
   */
  export type MovieCodeCountOutputTypeCountRecheckSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecheckScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    vendorId: number | null
  }

  export type VendorSumAggregateOutputType = {
    vendorId: number | null
  }

  export type VendorMinAggregateOutputType = {
    vendorId: number | null
    vendorName: string | null
    contactEmail: string | null
    websiteUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    vendorId: number | null
    vendorName: string | null
    contactEmail: string | null
    websiteUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    vendorId: number
    vendorName: number
    contactEmail: number
    websiteUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    vendorId?: true
  }

  export type VendorSumAggregateInputType = {
    vendorId?: true
  }

  export type VendorMinAggregateInputType = {
    vendorId?: true
    vendorName?: true
    contactEmail?: true
    websiteUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type VendorMaxAggregateInputType = {
    vendorId?: true
    vendorName?: true
    contactEmail?: true
    websiteUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type VendorCountAggregateInputType = {
    vendorId?: true
    vendorName?: true
    contactEmail?: true
    websiteUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    vendorId: number
    vendorName: string
    contactEmail: string | null
    websiteUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendorId?: boolean
    vendorName?: boolean
    contactEmail?: boolean
    websiteUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    movieCodes?: boolean | Vendor$movieCodesArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendorId?: boolean
    vendorName?: boolean
    contactEmail?: boolean
    websiteUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendorId?: boolean
    vendorName?: boolean
    contactEmail?: boolean
    websiteUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    vendorId?: boolean
    vendorName?: boolean
    contactEmail?: boolean
    websiteUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vendorId" | "vendorName" | "contactEmail" | "websiteUrl" | "isActive" | "createdAt", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCodes?: boolean | Vendor$movieCodesArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      movieCodes: Prisma.$MovieCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vendorId: number
      vendorName: string
      contactEmail: string | null
      websiteUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `vendorId`
     * const vendorWithVendorIdOnly = await prisma.vendor.findMany({ select: { vendorId: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `vendorId`
     * const vendorWithVendorIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { vendorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `vendorId`
     * const vendorWithVendorIdOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { vendorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieCodes<T extends Vendor$movieCodesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$movieCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly vendorId: FieldRef<"Vendor", 'Int'>
    readonly vendorName: FieldRef<"Vendor", 'String'>
    readonly contactEmail: FieldRef<"Vendor", 'String'>
    readonly websiteUrl: FieldRef<"Vendor", 'String'>
    readonly isActive: FieldRef<"Vendor", 'Boolean'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.movieCodes
   */
  export type Vendor$movieCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    where?: MovieCodeWhereInput
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    cursor?: MovieCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieCodeScalarFieldEnum | MovieCodeScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Studio
   */

  export type AggregateStudio = {
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  export type StudioAvgAggregateOutputType = {
    studioId: number | null
  }

  export type StudioSumAggregateOutputType = {
    studioId: number | null
  }

  export type StudioMinAggregateOutputType = {
    studioId: number | null
    studioName: string | null
    redemptionBaseUrl: string | null
    createdAt: Date | null
  }

  export type StudioMaxAggregateOutputType = {
    studioId: number | null
    studioName: string | null
    redemptionBaseUrl: string | null
    createdAt: Date | null
  }

  export type StudioCountAggregateOutputType = {
    studioId: number
    studioName: number
    redemptionBaseUrl: number
    createdAt: number
    _all: number
  }


  export type StudioAvgAggregateInputType = {
    studioId?: true
  }

  export type StudioSumAggregateInputType = {
    studioId?: true
  }

  export type StudioMinAggregateInputType = {
    studioId?: true
    studioName?: true
    redemptionBaseUrl?: true
    createdAt?: true
  }

  export type StudioMaxAggregateInputType = {
    studioId?: true
    studioName?: true
    redemptionBaseUrl?: true
    createdAt?: true
  }

  export type StudioCountAggregateInputType = {
    studioId?: true
    studioName?: true
    redemptionBaseUrl?: true
    createdAt?: true
    _all?: true
  }

  export type StudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studio to aggregate.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studios
    **/
    _count?: true | StudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMaxAggregateInputType
  }

  export type GetStudioAggregateType<T extends StudioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudio[P]>
      : GetScalarType<T[P], AggregateStudio[P]>
  }




  export type StudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioWhereInput
    orderBy?: StudioOrderByWithAggregationInput | StudioOrderByWithAggregationInput[]
    by: StudioScalarFieldEnum[] | StudioScalarFieldEnum
    having?: StudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioCountAggregateInputType | true
    _avg?: StudioAvgAggregateInputType
    _sum?: StudioSumAggregateInputType
    _min?: StudioMinAggregateInputType
    _max?: StudioMaxAggregateInputType
  }

  export type StudioGroupByOutputType = {
    studioId: number
    studioName: string
    redemptionBaseUrl: string | null
    createdAt: Date
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  type GetStudioGroupByPayload<T extends StudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioGroupByOutputType[P]>
        }
      >
    >


  export type StudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studioId?: boolean
    studioName?: boolean
    redemptionBaseUrl?: boolean
    createdAt?: boolean
    movies?: boolean | Studio$moviesArgs<ExtArgs>
    movieCodes?: boolean | Studio$movieCodesArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studioId?: boolean
    studioName?: boolean
    redemptionBaseUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studioId?: boolean
    studioName?: boolean
    redemptionBaseUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectScalar = {
    studioId?: boolean
    studioName?: boolean
    redemptionBaseUrl?: boolean
    createdAt?: boolean
  }

  export type StudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studioId" | "studioName" | "redemptionBaseUrl" | "createdAt", ExtArgs["result"]["studio"]>
  export type StudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Studio$moviesArgs<ExtArgs>
    movieCodes?: boolean | Studio$movieCodesArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Studio"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
      movieCodes: Prisma.$MovieCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      studioId: number
      studioName: string
      redemptionBaseUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["studio"]>
    composites: {}
  }

  type StudioGetPayload<S extends boolean | null | undefined | StudioDefaultArgs> = $Result.GetResult<Prisma.$StudioPayload, S>

  type StudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudioCountAggregateInputType | true
    }

  export interface StudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Studio'], meta: { name: 'Studio' } }
    /**
     * Find zero or one Studio that matches the filter.
     * @param {StudioFindUniqueArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudioFindUniqueArgs>(args: SelectSubset<T, StudioFindUniqueArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Studio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudioFindUniqueOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudioFindUniqueOrThrowArgs>(args: SelectSubset<T, StudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudioFindFirstArgs>(args?: SelectSubset<T, StudioFindFirstArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudioFindFirstOrThrowArgs>(args?: SelectSubset<T, StudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studios
     * const studios = await prisma.studio.findMany()
     * 
     * // Get first 10 Studios
     * const studios = await prisma.studio.findMany({ take: 10 })
     * 
     * // Only select the `studioId`
     * const studioWithStudioIdOnly = await prisma.studio.findMany({ select: { studioId: true } })
     * 
     */
    findMany<T extends StudioFindManyArgs>(args?: SelectSubset<T, StudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Studio.
     * @param {StudioCreateArgs} args - Arguments to create a Studio.
     * @example
     * // Create one Studio
     * const Studio = await prisma.studio.create({
     *   data: {
     *     // ... data to create a Studio
     *   }
     * })
     * 
     */
    create<T extends StudioCreateArgs>(args: SelectSubset<T, StudioCreateArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studios.
     * @param {StudioCreateManyArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudioCreateManyArgs>(args?: SelectSubset<T, StudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studios and returns the data saved in the database.
     * @param {StudioCreateManyAndReturnArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studios and only return the `studioId`
     * const studioWithStudioIdOnly = await prisma.studio.createManyAndReturn({
     *   select: { studioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudioCreateManyAndReturnArgs>(args?: SelectSubset<T, StudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Studio.
     * @param {StudioDeleteArgs} args - Arguments to delete one Studio.
     * @example
     * // Delete one Studio
     * const Studio = await prisma.studio.delete({
     *   where: {
     *     // ... filter to delete one Studio
     *   }
     * })
     * 
     */
    delete<T extends StudioDeleteArgs>(args: SelectSubset<T, StudioDeleteArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Studio.
     * @param {StudioUpdateArgs} args - Arguments to update one Studio.
     * @example
     * // Update one Studio
     * const studio = await prisma.studio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudioUpdateArgs>(args: SelectSubset<T, StudioUpdateArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studios.
     * @param {StudioDeleteManyArgs} args - Arguments to filter Studios to delete.
     * @example
     * // Delete a few Studios
     * const { count } = await prisma.studio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudioDeleteManyArgs>(args?: SelectSubset<T, StudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudioUpdateManyArgs>(args: SelectSubset<T, StudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios and returns the data updated in the database.
     * @param {StudioUpdateManyAndReturnArgs} args - Arguments to update many Studios.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studios and only return the `studioId`
     * const studioWithStudioIdOnly = await prisma.studio.updateManyAndReturn({
     *   select: { studioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudioUpdateManyAndReturnArgs>(args: SelectSubset<T, StudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Studio.
     * @param {StudioUpsertArgs} args - Arguments to update or create a Studio.
     * @example
     * // Update or create a Studio
     * const studio = await prisma.studio.upsert({
     *   create: {
     *     // ... data to create a Studio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studio we want to update
     *   }
     * })
     */
    upsert<T extends StudioUpsertArgs>(args: SelectSubset<T, StudioUpsertArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioCountArgs} args - Arguments to filter Studios to count.
     * @example
     * // Count the number of Studios
     * const count = await prisma.studio.count({
     *   where: {
     *     // ... the filter for the Studios we want to count
     *   }
     * })
    **/
    count<T extends StudioCountArgs>(
      args?: Subset<T, StudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudioAggregateArgs>(args: Subset<T, StudioAggregateArgs>): Prisma.PrismaPromise<GetStudioAggregateType<T>>

    /**
     * Group by Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioGroupByArgs['orderBy'] }
        : { orderBy?: StudioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Studio model
   */
  readonly fields: StudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Studio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Studio$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Studio$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movieCodes<T extends Studio$movieCodesArgs<ExtArgs> = {}>(args?: Subset<T, Studio$movieCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Studio model
   */
  interface StudioFieldRefs {
    readonly studioId: FieldRef<"Studio", 'Int'>
    readonly studioName: FieldRef<"Studio", 'String'>
    readonly redemptionBaseUrl: FieldRef<"Studio", 'String'>
    readonly createdAt: FieldRef<"Studio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Studio findUnique
   */
  export type StudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findUniqueOrThrow
   */
  export type StudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findFirst
   */
  export type StudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio findFirstOrThrow
   */
  export type StudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio findMany
   */
  export type StudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studios to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio create
   */
  export type StudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The data needed to create a Studio.
     */
    data: XOR<StudioCreateInput, StudioUncheckedCreateInput>
  }

  /**
   * Studio createMany
   */
  export type StudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Studios.
     */
    data: StudioCreateManyInput | StudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studio createManyAndReturn
   */
  export type StudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * The data used to create many Studios.
     */
    data: StudioCreateManyInput | StudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studio update
   */
  export type StudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The data needed to update a Studio.
     */
    data: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
    /**
     * Choose, which Studio to update.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio updateMany
   */
  export type StudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to update.
     */
    limit?: number
  }

  /**
   * Studio updateManyAndReturn
   */
  export type StudioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to update.
     */
    limit?: number
  }

  /**
   * Studio upsert
   */
  export type StudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The filter to search for the Studio to update in case it exists.
     */
    where: StudioWhereUniqueInput
    /**
     * In case the Studio found by the `where` argument doesn't exist, create a new Studio with this data.
     */
    create: XOR<StudioCreateInput, StudioUncheckedCreateInput>
    /**
     * In case the Studio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
  }

  /**
   * Studio delete
   */
  export type StudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter which Studio to delete.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio deleteMany
   */
  export type StudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studios to delete
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to delete.
     */
    limit?: number
  }

  /**
   * Studio.movies
   */
  export type Studio$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Studio.movieCodes
   */
  export type Studio$movieCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    where?: MovieCodeWhereInput
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    cursor?: MovieCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieCodeScalarFieldEnum | MovieCodeScalarFieldEnum[]
  }

  /**
   * Studio without action
   */
  export type StudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
  }


  /**
   * Model RedemptionPlatform
   */

  export type AggregateRedemptionPlatform = {
    _count: RedemptionPlatformCountAggregateOutputType | null
    _avg: RedemptionPlatformAvgAggregateOutputType | null
    _sum: RedemptionPlatformSumAggregateOutputType | null
    _min: RedemptionPlatformMinAggregateOutputType | null
    _max: RedemptionPlatformMaxAggregateOutputType | null
  }

  export type RedemptionPlatformAvgAggregateOutputType = {
    platformId: number | null
  }

  export type RedemptionPlatformSumAggregateOutputType = {
    platformId: number | null
  }

  export type RedemptionPlatformMinAggregateOutputType = {
    platformId: number | null
    platformName: string | null
    platformCode: string | null
    redemptionUrl: string | null
  }

  export type RedemptionPlatformMaxAggregateOutputType = {
    platformId: number | null
    platformName: string | null
    platformCode: string | null
    redemptionUrl: string | null
  }

  export type RedemptionPlatformCountAggregateOutputType = {
    platformId: number
    platformName: number
    platformCode: number
    redemptionUrl: number
    _all: number
  }


  export type RedemptionPlatformAvgAggregateInputType = {
    platformId?: true
  }

  export type RedemptionPlatformSumAggregateInputType = {
    platformId?: true
  }

  export type RedemptionPlatformMinAggregateInputType = {
    platformId?: true
    platformName?: true
    platformCode?: true
    redemptionUrl?: true
  }

  export type RedemptionPlatformMaxAggregateInputType = {
    platformId?: true
    platformName?: true
    platformCode?: true
    redemptionUrl?: true
  }

  export type RedemptionPlatformCountAggregateInputType = {
    platformId?: true
    platformName?: true
    platformCode?: true
    redemptionUrl?: true
    _all?: true
  }

  export type RedemptionPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedemptionPlatform to aggregate.
     */
    where?: RedemptionPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPlatforms to fetch.
     */
    orderBy?: RedemptionPlatformOrderByWithRelationInput | RedemptionPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedemptionPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedemptionPlatforms
    **/
    _count?: true | RedemptionPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedemptionPlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedemptionPlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedemptionPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedemptionPlatformMaxAggregateInputType
  }

  export type GetRedemptionPlatformAggregateType<T extends RedemptionPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemptionPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemptionPlatform[P]>
      : GetScalarType<T[P], AggregateRedemptionPlatform[P]>
  }




  export type RedemptionPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionPlatformWhereInput
    orderBy?: RedemptionPlatformOrderByWithAggregationInput | RedemptionPlatformOrderByWithAggregationInput[]
    by: RedemptionPlatformScalarFieldEnum[] | RedemptionPlatformScalarFieldEnum
    having?: RedemptionPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedemptionPlatformCountAggregateInputType | true
    _avg?: RedemptionPlatformAvgAggregateInputType
    _sum?: RedemptionPlatformSumAggregateInputType
    _min?: RedemptionPlatformMinAggregateInputType
    _max?: RedemptionPlatformMaxAggregateInputType
  }

  export type RedemptionPlatformGroupByOutputType = {
    platformId: number
    platformName: string
    platformCode: string
    redemptionUrl: string | null
    _count: RedemptionPlatformCountAggregateOutputType | null
    _avg: RedemptionPlatformAvgAggregateOutputType | null
    _sum: RedemptionPlatformSumAggregateOutputType | null
    _min: RedemptionPlatformMinAggregateOutputType | null
    _max: RedemptionPlatformMaxAggregateOutputType | null
  }

  type GetRedemptionPlatformGroupByPayload<T extends RedemptionPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedemptionPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedemptionPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedemptionPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], RedemptionPlatformGroupByOutputType[P]>
        }
      >
    >


  export type RedemptionPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    platformId?: boolean
    platformName?: boolean
    platformCode?: boolean
    redemptionUrl?: boolean
    availabilities?: boolean | RedemptionPlatform$availabilitiesArgs<ExtArgs>
    validationHistory?: boolean | RedemptionPlatform$validationHistoryArgs<ExtArgs>
    errorLogs?: boolean | RedemptionPlatform$errorLogsArgs<ExtArgs>
    _count?: boolean | RedemptionPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemptionPlatform"]>

  export type RedemptionPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    platformId?: boolean
    platformName?: boolean
    platformCode?: boolean
    redemptionUrl?: boolean
  }, ExtArgs["result"]["redemptionPlatform"]>

  export type RedemptionPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    platformId?: boolean
    platformName?: boolean
    platformCode?: boolean
    redemptionUrl?: boolean
  }, ExtArgs["result"]["redemptionPlatform"]>

  export type RedemptionPlatformSelectScalar = {
    platformId?: boolean
    platformName?: boolean
    platformCode?: boolean
    redemptionUrl?: boolean
  }

  export type RedemptionPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"platformId" | "platformName" | "platformCode" | "redemptionUrl", ExtArgs["result"]["redemptionPlatform"]>
  export type RedemptionPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | RedemptionPlatform$availabilitiesArgs<ExtArgs>
    validationHistory?: boolean | RedemptionPlatform$validationHistoryArgs<ExtArgs>
    errorLogs?: boolean | RedemptionPlatform$errorLogsArgs<ExtArgs>
    _count?: boolean | RedemptionPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RedemptionPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RedemptionPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RedemptionPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RedemptionPlatform"
    objects: {
      availabilities: Prisma.$CodePlatformAvailabilityPayload<ExtArgs>[]
      validationHistory: Prisma.$ValidationHistoryPayload<ExtArgs>[]
      errorLogs: Prisma.$ErrorLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      platformId: number
      platformName: string
      platformCode: string
      redemptionUrl: string | null
    }, ExtArgs["result"]["redemptionPlatform"]>
    composites: {}
  }

  type RedemptionPlatformGetPayload<S extends boolean | null | undefined | RedemptionPlatformDefaultArgs> = $Result.GetResult<Prisma.$RedemptionPlatformPayload, S>

  type RedemptionPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RedemptionPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RedemptionPlatformCountAggregateInputType | true
    }

  export interface RedemptionPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedemptionPlatform'], meta: { name: 'RedemptionPlatform' } }
    /**
     * Find zero or one RedemptionPlatform that matches the filter.
     * @param {RedemptionPlatformFindUniqueArgs} args - Arguments to find a RedemptionPlatform
     * @example
     * // Get one RedemptionPlatform
     * const redemptionPlatform = await prisma.redemptionPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedemptionPlatformFindUniqueArgs>(args: SelectSubset<T, RedemptionPlatformFindUniqueArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RedemptionPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RedemptionPlatformFindUniqueOrThrowArgs} args - Arguments to find a RedemptionPlatform
     * @example
     * // Get one RedemptionPlatform
     * const redemptionPlatform = await prisma.redemptionPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedemptionPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, RedemptionPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedemptionPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformFindFirstArgs} args - Arguments to find a RedemptionPlatform
     * @example
     * // Get one RedemptionPlatform
     * const redemptionPlatform = await prisma.redemptionPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedemptionPlatformFindFirstArgs>(args?: SelectSubset<T, RedemptionPlatformFindFirstArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedemptionPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformFindFirstOrThrowArgs} args - Arguments to find a RedemptionPlatform
     * @example
     * // Get one RedemptionPlatform
     * const redemptionPlatform = await prisma.redemptionPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedemptionPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, RedemptionPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RedemptionPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedemptionPlatforms
     * const redemptionPlatforms = await prisma.redemptionPlatform.findMany()
     * 
     * // Get first 10 RedemptionPlatforms
     * const redemptionPlatforms = await prisma.redemptionPlatform.findMany({ take: 10 })
     * 
     * // Only select the `platformId`
     * const redemptionPlatformWithPlatformIdOnly = await prisma.redemptionPlatform.findMany({ select: { platformId: true } })
     * 
     */
    findMany<T extends RedemptionPlatformFindManyArgs>(args?: SelectSubset<T, RedemptionPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RedemptionPlatform.
     * @param {RedemptionPlatformCreateArgs} args - Arguments to create a RedemptionPlatform.
     * @example
     * // Create one RedemptionPlatform
     * const RedemptionPlatform = await prisma.redemptionPlatform.create({
     *   data: {
     *     // ... data to create a RedemptionPlatform
     *   }
     * })
     * 
     */
    create<T extends RedemptionPlatformCreateArgs>(args: SelectSubset<T, RedemptionPlatformCreateArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RedemptionPlatforms.
     * @param {RedemptionPlatformCreateManyArgs} args - Arguments to create many RedemptionPlatforms.
     * @example
     * // Create many RedemptionPlatforms
     * const redemptionPlatform = await prisma.redemptionPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedemptionPlatformCreateManyArgs>(args?: SelectSubset<T, RedemptionPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RedemptionPlatforms and returns the data saved in the database.
     * @param {RedemptionPlatformCreateManyAndReturnArgs} args - Arguments to create many RedemptionPlatforms.
     * @example
     * // Create many RedemptionPlatforms
     * const redemptionPlatform = await prisma.redemptionPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RedemptionPlatforms and only return the `platformId`
     * const redemptionPlatformWithPlatformIdOnly = await prisma.redemptionPlatform.createManyAndReturn({
     *   select: { platformId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedemptionPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, RedemptionPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RedemptionPlatform.
     * @param {RedemptionPlatformDeleteArgs} args - Arguments to delete one RedemptionPlatform.
     * @example
     * // Delete one RedemptionPlatform
     * const RedemptionPlatform = await prisma.redemptionPlatform.delete({
     *   where: {
     *     // ... filter to delete one RedemptionPlatform
     *   }
     * })
     * 
     */
    delete<T extends RedemptionPlatformDeleteArgs>(args: SelectSubset<T, RedemptionPlatformDeleteArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RedemptionPlatform.
     * @param {RedemptionPlatformUpdateArgs} args - Arguments to update one RedemptionPlatform.
     * @example
     * // Update one RedemptionPlatform
     * const redemptionPlatform = await prisma.redemptionPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedemptionPlatformUpdateArgs>(args: SelectSubset<T, RedemptionPlatformUpdateArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RedemptionPlatforms.
     * @param {RedemptionPlatformDeleteManyArgs} args - Arguments to filter RedemptionPlatforms to delete.
     * @example
     * // Delete a few RedemptionPlatforms
     * const { count } = await prisma.redemptionPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedemptionPlatformDeleteManyArgs>(args?: SelectSubset<T, RedemptionPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedemptionPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedemptionPlatforms
     * const redemptionPlatform = await prisma.redemptionPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedemptionPlatformUpdateManyArgs>(args: SelectSubset<T, RedemptionPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedemptionPlatforms and returns the data updated in the database.
     * @param {RedemptionPlatformUpdateManyAndReturnArgs} args - Arguments to update many RedemptionPlatforms.
     * @example
     * // Update many RedemptionPlatforms
     * const redemptionPlatform = await prisma.redemptionPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RedemptionPlatforms and only return the `platformId`
     * const redemptionPlatformWithPlatformIdOnly = await prisma.redemptionPlatform.updateManyAndReturn({
     *   select: { platformId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RedemptionPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, RedemptionPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RedemptionPlatform.
     * @param {RedemptionPlatformUpsertArgs} args - Arguments to update or create a RedemptionPlatform.
     * @example
     * // Update or create a RedemptionPlatform
     * const redemptionPlatform = await prisma.redemptionPlatform.upsert({
     *   create: {
     *     // ... data to create a RedemptionPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedemptionPlatform we want to update
     *   }
     * })
     */
    upsert<T extends RedemptionPlatformUpsertArgs>(args: SelectSubset<T, RedemptionPlatformUpsertArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RedemptionPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformCountArgs} args - Arguments to filter RedemptionPlatforms to count.
     * @example
     * // Count the number of RedemptionPlatforms
     * const count = await prisma.redemptionPlatform.count({
     *   where: {
     *     // ... the filter for the RedemptionPlatforms we want to count
     *   }
     * })
    **/
    count<T extends RedemptionPlatformCountArgs>(
      args?: Subset<T, RedemptionPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedemptionPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedemptionPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RedemptionPlatformAggregateArgs>(args: Subset<T, RedemptionPlatformAggregateArgs>): Prisma.PrismaPromise<GetRedemptionPlatformAggregateType<T>>

    /**
     * Group by RedemptionPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionPlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RedemptionPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedemptionPlatformGroupByArgs['orderBy'] }
        : { orderBy?: RedemptionPlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RedemptionPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemptionPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RedemptionPlatform model
   */
  readonly fields: RedemptionPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RedemptionPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedemptionPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilities<T extends RedemptionPlatform$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, RedemptionPlatform$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationHistory<T extends RedemptionPlatform$validationHistoryArgs<ExtArgs> = {}>(args?: Subset<T, RedemptionPlatform$validationHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    errorLogs<T extends RedemptionPlatform$errorLogsArgs<ExtArgs> = {}>(args?: Subset<T, RedemptionPlatform$errorLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RedemptionPlatform model
   */
  interface RedemptionPlatformFieldRefs {
    readonly platformId: FieldRef<"RedemptionPlatform", 'Int'>
    readonly platformName: FieldRef<"RedemptionPlatform", 'String'>
    readonly platformCode: FieldRef<"RedemptionPlatform", 'String'>
    readonly redemptionUrl: FieldRef<"RedemptionPlatform", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RedemptionPlatform findUnique
   */
  export type RedemptionPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPlatform to fetch.
     */
    where: RedemptionPlatformWhereUniqueInput
  }

  /**
   * RedemptionPlatform findUniqueOrThrow
   */
  export type RedemptionPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPlatform to fetch.
     */
    where: RedemptionPlatformWhereUniqueInput
  }

  /**
   * RedemptionPlatform findFirst
   */
  export type RedemptionPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPlatform to fetch.
     */
    where?: RedemptionPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPlatforms to fetch.
     */
    orderBy?: RedemptionPlatformOrderByWithRelationInput | RedemptionPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedemptionPlatforms.
     */
    cursor?: RedemptionPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedemptionPlatforms.
     */
    distinct?: RedemptionPlatformScalarFieldEnum | RedemptionPlatformScalarFieldEnum[]
  }

  /**
   * RedemptionPlatform findFirstOrThrow
   */
  export type RedemptionPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPlatform to fetch.
     */
    where?: RedemptionPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPlatforms to fetch.
     */
    orderBy?: RedemptionPlatformOrderByWithRelationInput | RedemptionPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedemptionPlatforms.
     */
    cursor?: RedemptionPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedemptionPlatforms.
     */
    distinct?: RedemptionPlatformScalarFieldEnum | RedemptionPlatformScalarFieldEnum[]
  }

  /**
   * RedemptionPlatform findMany
   */
  export type RedemptionPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RedemptionPlatforms to fetch.
     */
    where?: RedemptionPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedemptionPlatforms to fetch.
     */
    orderBy?: RedemptionPlatformOrderByWithRelationInput | RedemptionPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedemptionPlatforms.
     */
    cursor?: RedemptionPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedemptionPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedemptionPlatforms.
     */
    skip?: number
    distinct?: RedemptionPlatformScalarFieldEnum | RedemptionPlatformScalarFieldEnum[]
  }

  /**
   * RedemptionPlatform create
   */
  export type RedemptionPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a RedemptionPlatform.
     */
    data: XOR<RedemptionPlatformCreateInput, RedemptionPlatformUncheckedCreateInput>
  }

  /**
   * RedemptionPlatform createMany
   */
  export type RedemptionPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedemptionPlatforms.
     */
    data: RedemptionPlatformCreateManyInput | RedemptionPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedemptionPlatform createManyAndReturn
   */
  export type RedemptionPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many RedemptionPlatforms.
     */
    data: RedemptionPlatformCreateManyInput | RedemptionPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedemptionPlatform update
   */
  export type RedemptionPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a RedemptionPlatform.
     */
    data: XOR<RedemptionPlatformUpdateInput, RedemptionPlatformUncheckedUpdateInput>
    /**
     * Choose, which RedemptionPlatform to update.
     */
    where: RedemptionPlatformWhereUniqueInput
  }

  /**
   * RedemptionPlatform updateMany
   */
  export type RedemptionPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedemptionPlatforms.
     */
    data: XOR<RedemptionPlatformUpdateManyMutationInput, RedemptionPlatformUncheckedUpdateManyInput>
    /**
     * Filter which RedemptionPlatforms to update
     */
    where?: RedemptionPlatformWhereInput
    /**
     * Limit how many RedemptionPlatforms to update.
     */
    limit?: number
  }

  /**
   * RedemptionPlatform updateManyAndReturn
   */
  export type RedemptionPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * The data used to update RedemptionPlatforms.
     */
    data: XOR<RedemptionPlatformUpdateManyMutationInput, RedemptionPlatformUncheckedUpdateManyInput>
    /**
     * Filter which RedemptionPlatforms to update
     */
    where?: RedemptionPlatformWhereInput
    /**
     * Limit how many RedemptionPlatforms to update.
     */
    limit?: number
  }

  /**
   * RedemptionPlatform upsert
   */
  export type RedemptionPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the RedemptionPlatform to update in case it exists.
     */
    where: RedemptionPlatformWhereUniqueInput
    /**
     * In case the RedemptionPlatform found by the `where` argument doesn't exist, create a new RedemptionPlatform with this data.
     */
    create: XOR<RedemptionPlatformCreateInput, RedemptionPlatformUncheckedCreateInput>
    /**
     * In case the RedemptionPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedemptionPlatformUpdateInput, RedemptionPlatformUncheckedUpdateInput>
  }

  /**
   * RedemptionPlatform delete
   */
  export type RedemptionPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    /**
     * Filter which RedemptionPlatform to delete.
     */
    where: RedemptionPlatformWhereUniqueInput
  }

  /**
   * RedemptionPlatform deleteMany
   */
  export type RedemptionPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedemptionPlatforms to delete
     */
    where?: RedemptionPlatformWhereInput
    /**
     * Limit how many RedemptionPlatforms to delete.
     */
    limit?: number
  }

  /**
   * RedemptionPlatform.availabilities
   */
  export type RedemptionPlatform$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    where?: CodePlatformAvailabilityWhereInput
    orderBy?: CodePlatformAvailabilityOrderByWithRelationInput | CodePlatformAvailabilityOrderByWithRelationInput[]
    cursor?: CodePlatformAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodePlatformAvailabilityScalarFieldEnum | CodePlatformAvailabilityScalarFieldEnum[]
  }

  /**
   * RedemptionPlatform.validationHistory
   */
  export type RedemptionPlatform$validationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    where?: ValidationHistoryWhereInput
    orderBy?: ValidationHistoryOrderByWithRelationInput | ValidationHistoryOrderByWithRelationInput[]
    cursor?: ValidationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValidationHistoryScalarFieldEnum | ValidationHistoryScalarFieldEnum[]
  }

  /**
   * RedemptionPlatform.errorLogs
   */
  export type RedemptionPlatform$errorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    cursor?: ErrorLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * RedemptionPlatform without action
   */
  export type RedemptionPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    movieId: number | null
    releaseYear: number | null
    runtimeMinutes: number | null
    studioId: number | null
  }

  export type MovieSumAggregateOutputType = {
    movieId: number | null
    releaseYear: number | null
    runtimeMinutes: number | null
    studioId: number | null
  }

  export type MovieMinAggregateOutputType = {
    movieId: number | null
    title: string | null
    releaseYear: number | null
    rating: string | null
    quality: $Enums.Quality | null
    runtimeMinutes: number | null
    imageUrl: string | null
    studioId: number | null
    createdAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    movieId: number | null
    title: string | null
    releaseYear: number | null
    rating: string | null
    quality: $Enums.Quality | null
    runtimeMinutes: number | null
    imageUrl: string | null
    studioId: number | null
    createdAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    movieId: number
    title: number
    releaseYear: number
    rating: number
    quality: number
    runtimeMinutes: number
    imageUrl: number
    studioId: number
    createdAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    movieId?: true
    releaseYear?: true
    runtimeMinutes?: true
    studioId?: true
  }

  export type MovieSumAggregateInputType = {
    movieId?: true
    releaseYear?: true
    runtimeMinutes?: true
    studioId?: true
  }

  export type MovieMinAggregateInputType = {
    movieId?: true
    title?: true
    releaseYear?: true
    rating?: true
    quality?: true
    runtimeMinutes?: true
    imageUrl?: true
    studioId?: true
    createdAt?: true
  }

  export type MovieMaxAggregateInputType = {
    movieId?: true
    title?: true
    releaseYear?: true
    rating?: true
    quality?: true
    runtimeMinutes?: true
    imageUrl?: true
    studioId?: true
    createdAt?: true
  }

  export type MovieCountAggregateInputType = {
    movieId?: true
    title?: true
    releaseYear?: true
    rating?: true
    quality?: true
    runtimeMinutes?: true
    imageUrl?: true
    studioId?: true
    createdAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    movieId: number
    title: string
    releaseYear: number | null
    rating: string | null
    quality: $Enums.Quality | null
    runtimeMinutes: number | null
    imageUrl: string | null
    studioId: number | null
    createdAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    title?: boolean
    releaseYear?: boolean
    rating?: boolean
    quality?: boolean
    runtimeMinutes?: boolean
    imageUrl?: boolean
    studioId?: boolean
    createdAt?: boolean
    studio?: boolean | Movie$studioArgs<ExtArgs>
    movieCodes?: boolean | Movie$movieCodesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    title?: boolean
    releaseYear?: boolean
    rating?: boolean
    quality?: boolean
    runtimeMinutes?: boolean
    imageUrl?: boolean
    studioId?: boolean
    createdAt?: boolean
    studio?: boolean | Movie$studioArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    title?: boolean
    releaseYear?: boolean
    rating?: boolean
    quality?: boolean
    runtimeMinutes?: boolean
    imageUrl?: boolean
    studioId?: boolean
    createdAt?: boolean
    studio?: boolean | Movie$studioArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    movieId?: boolean
    title?: boolean
    releaseYear?: boolean
    rating?: boolean
    quality?: boolean
    runtimeMinutes?: boolean
    imageUrl?: boolean
    studioId?: boolean
    createdAt?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "title" | "releaseYear" | "rating" | "quality" | "runtimeMinutes" | "imageUrl" | "studioId" | "createdAt", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | Movie$studioArgs<ExtArgs>
    movieCodes?: boolean | Movie$movieCodesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | Movie$studioArgs<ExtArgs>
  }
  export type MovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | Movie$studioArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      studio: Prisma.$StudioPayload<ExtArgs> | null
      movieCodes: Prisma.$MovieCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: number
      title: string
      releaseYear: number | null
      rating: string | null
      quality: $Enums.Quality | null
      runtimeMinutes: number | null
      imageUrl: string | null
      studioId: number | null
      createdAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieWithMovieIdOnly = await prisma.movie.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `movieId`
     * const movieWithMovieIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { movieId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `movieId`
     * const movieWithMovieIdOnly = await prisma.movie.updateManyAndReturn({
     *   select: { movieId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studio<T extends Movie$studioArgs<ExtArgs> = {}>(args?: Subset<T, Movie$studioArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    movieCodes<T extends Movie$movieCodesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$movieCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly movieId: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly releaseYear: FieldRef<"Movie", 'Int'>
    readonly rating: FieldRef<"Movie", 'String'>
    readonly quality: FieldRef<"Movie", 'Quality'>
    readonly runtimeMinutes: FieldRef<"Movie", 'Int'>
    readonly imageUrl: FieldRef<"Movie", 'String'>
    readonly studioId: FieldRef<"Movie", 'Int'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.studio
   */
  export type Movie$studioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    where?: StudioWhereInput
  }

  /**
   * Movie.movieCodes
   */
  export type Movie$movieCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    where?: MovieCodeWhereInput
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    cursor?: MovieCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieCodeScalarFieldEnum | MovieCodeScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerId: number | null
    totalPurchases: number | null
    totalSpent: Decimal | null
  }

  export type CustomerSumAggregateOutputType = {
    customerId: number | null
    totalPurchases: number | null
    totalSpent: Decimal | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: number | null
    customerName: string | null
    email: string | null
    phone: string | null
    totalPurchases: number | null
    totalSpent: Decimal | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: number | null
    customerName: string | null
    email: string | null
    phone: string | null
    totalPurchases: number | null
    totalSpent: Decimal | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    customerName: number
    email: number
    phone: number
    totalPurchases: number
    totalSpent: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerId?: true
    totalPurchases?: true
    totalSpent?: true
  }

  export type CustomerSumAggregateInputType = {
    customerId?: true
    totalPurchases?: true
    totalSpent?: true
  }

  export type CustomerMinAggregateInputType = {
    customerId?: true
    customerName?: true
    email?: true
    phone?: true
    totalPurchases?: true
    totalSpent?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    customerName?: true
    email?: true
    phone?: true
    totalPurchases?: true
    totalSpent?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    customerName?: true
    email?: true
    phone?: true
    totalPurchases?: true
    totalSpent?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: number
    customerName: string | null
    email: string | null
    phone: string | null
    totalPurchases: number
    totalSpent: Decimal
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    totalPurchases?: boolean
    totalSpent?: boolean
    sales?: boolean | Customer$salesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    totalPurchases?: boolean
    totalSpent?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    totalPurchases?: boolean
    totalSpent?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customerId?: boolean
    customerName?: boolean
    email?: boolean
    phone?: boolean
    totalPurchases?: boolean
    totalSpent?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerId" | "customerName" | "email" | "phone" | "totalPurchases" | "totalSpent", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Customer$salesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      customerName: string | null
      email: string | null
      phone: string | null
      totalPurchases: number
      totalSpent: Prisma.Decimal
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { customerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Customer$salesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'Int'>
    readonly customerName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly totalPurchases: FieldRef<"Customer", 'Int'>
    readonly totalSpent: FieldRef<"Customer", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data?: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.sales
   */
  export type Customer$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model MovieCode
   */

  export type AggregateMovieCode = {
    _count: MovieCodeCountAggregateOutputType | null
    _avg: MovieCodeAvgAggregateOutputType | null
    _sum: MovieCodeSumAggregateOutputType | null
    _min: MovieCodeMinAggregateOutputType | null
    _max: MovieCodeMaxAggregateOutputType | null
  }

  export type MovieCodeAvgAggregateOutputType = {
    codeId: number | null
    vendorId: number | null
    studioId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
  }

  export type MovieCodeSumAggregateOutputType = {
    codeId: number | null
    vendorId: number | null
    studioId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
  }

  export type MovieCodeMinAggregateOutputType = {
    codeId: number | null
    code: string | null
    quality: $Enums.Quality | null
    status: $Enums.CodeStatus | null
    isBundle: boolean | null
    bundleTitle: string | null
    vendorId: number | null
    studioId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    redemptionUrl: string | null
    isVerified: boolean | null
    lastVerifiedAt: Date | null
    vendorOrderId: string | null
  }

  export type MovieCodeMaxAggregateOutputType = {
    codeId: number | null
    code: string | null
    quality: $Enums.Quality | null
    status: $Enums.CodeStatus | null
    isBundle: boolean | null
    bundleTitle: string | null
    vendorId: number | null
    studioId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    redemptionUrl: string | null
    isVerified: boolean | null
    lastVerifiedAt: Date | null
    vendorOrderId: string | null
  }

  export type MovieCodeCountAggregateOutputType = {
    codeId: number
    code: number
    quality: number
    status: number
    isBundle: number
    bundleTitle: number
    vendorId: number
    studioId: number
    purchasePrice: number
    sellingPrice: number
    redemptionUrl: number
    isVerified: number
    lastVerifiedAt: number
    vendorOrderId: number
    _all: number
  }


  export type MovieCodeAvgAggregateInputType = {
    codeId?: true
    vendorId?: true
    studioId?: true
    purchasePrice?: true
    sellingPrice?: true
  }

  export type MovieCodeSumAggregateInputType = {
    codeId?: true
    vendorId?: true
    studioId?: true
    purchasePrice?: true
    sellingPrice?: true
  }

  export type MovieCodeMinAggregateInputType = {
    codeId?: true
    code?: true
    quality?: true
    status?: true
    isBundle?: true
    bundleTitle?: true
    vendorId?: true
    studioId?: true
    purchasePrice?: true
    sellingPrice?: true
    redemptionUrl?: true
    isVerified?: true
    lastVerifiedAt?: true
    vendorOrderId?: true
  }

  export type MovieCodeMaxAggregateInputType = {
    codeId?: true
    code?: true
    quality?: true
    status?: true
    isBundle?: true
    bundleTitle?: true
    vendorId?: true
    studioId?: true
    purchasePrice?: true
    sellingPrice?: true
    redemptionUrl?: true
    isVerified?: true
    lastVerifiedAt?: true
    vendorOrderId?: true
  }

  export type MovieCodeCountAggregateInputType = {
    codeId?: true
    code?: true
    quality?: true
    status?: true
    isBundle?: true
    bundleTitle?: true
    vendorId?: true
    studioId?: true
    purchasePrice?: true
    sellingPrice?: true
    redemptionUrl?: true
    isVerified?: true
    lastVerifiedAt?: true
    vendorOrderId?: true
    _all?: true
  }

  export type MovieCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieCode to aggregate.
     */
    where?: MovieCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCodes to fetch.
     */
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieCodes
    **/
    _count?: true | MovieCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieCodeMaxAggregateInputType
  }

  export type GetMovieCodeAggregateType<T extends MovieCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieCode[P]>
      : GetScalarType<T[P], AggregateMovieCode[P]>
  }




  export type MovieCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCodeWhereInput
    orderBy?: MovieCodeOrderByWithAggregationInput | MovieCodeOrderByWithAggregationInput[]
    by: MovieCodeScalarFieldEnum[] | MovieCodeScalarFieldEnum
    having?: MovieCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCodeCountAggregateInputType | true
    _avg?: MovieCodeAvgAggregateInputType
    _sum?: MovieCodeSumAggregateInputType
    _min?: MovieCodeMinAggregateInputType
    _max?: MovieCodeMaxAggregateInputType
  }

  export type MovieCodeGroupByOutputType = {
    codeId: number
    code: string
    quality: $Enums.Quality
    status: $Enums.CodeStatus
    isBundle: boolean
    bundleTitle: string | null
    vendorId: number
    studioId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    redemptionUrl: string | null
    isVerified: boolean
    lastVerifiedAt: Date | null
    vendorOrderId: string | null
    _count: MovieCodeCountAggregateOutputType | null
    _avg: MovieCodeAvgAggregateOutputType | null
    _sum: MovieCodeSumAggregateOutputType | null
    _min: MovieCodeMinAggregateOutputType | null
    _max: MovieCodeMaxAggregateOutputType | null
  }

  type GetMovieCodeGroupByPayload<T extends MovieCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieCodeGroupByOutputType[P]>
            : GetScalarType<T[P], MovieCodeGroupByOutputType[P]>
        }
      >
    >


  export type MovieCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    code?: boolean
    quality?: boolean
    status?: boolean
    isBundle?: boolean
    bundleTitle?: boolean
    vendorId?: boolean
    studioId?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    redemptionUrl?: boolean
    isVerified?: boolean
    lastVerifiedAt?: boolean
    vendorOrderId?: boolean
    movies?: boolean | MovieCode$moviesArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    studio?: boolean | MovieCode$studioArgs<ExtArgs>
    sales?: boolean | MovieCode$salesArgs<ExtArgs>
    availabilities?: boolean | MovieCode$availabilitiesArgs<ExtArgs>
    validationHistory?: boolean | MovieCode$validationHistoryArgs<ExtArgs>
    errorLogs?: boolean | MovieCode$errorLogsArgs<ExtArgs>
    recheckSchedules?: boolean | MovieCode$recheckSchedulesArgs<ExtArgs>
    _count?: boolean | MovieCodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieCode"]>

  export type MovieCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    code?: boolean
    quality?: boolean
    status?: boolean
    isBundle?: boolean
    bundleTitle?: boolean
    vendorId?: boolean
    studioId?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    redemptionUrl?: boolean
    isVerified?: boolean
    lastVerifiedAt?: boolean
    vendorOrderId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    studio?: boolean | MovieCode$studioArgs<ExtArgs>
  }, ExtArgs["result"]["movieCode"]>

  export type MovieCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    code?: boolean
    quality?: boolean
    status?: boolean
    isBundle?: boolean
    bundleTitle?: boolean
    vendorId?: boolean
    studioId?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    redemptionUrl?: boolean
    isVerified?: boolean
    lastVerifiedAt?: boolean
    vendorOrderId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    studio?: boolean | MovieCode$studioArgs<ExtArgs>
  }, ExtArgs["result"]["movieCode"]>

  export type MovieCodeSelectScalar = {
    codeId?: boolean
    code?: boolean
    quality?: boolean
    status?: boolean
    isBundle?: boolean
    bundleTitle?: boolean
    vendorId?: boolean
    studioId?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    redemptionUrl?: boolean
    isVerified?: boolean
    lastVerifiedAt?: boolean
    vendorOrderId?: boolean
  }

  export type MovieCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codeId" | "code" | "quality" | "status" | "isBundle" | "bundleTitle" | "vendorId" | "studioId" | "purchasePrice" | "sellingPrice" | "redemptionUrl" | "isVerified" | "lastVerifiedAt" | "vendorOrderId", ExtArgs["result"]["movieCode"]>
  export type MovieCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieCode$moviesArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    studio?: boolean | MovieCode$studioArgs<ExtArgs>
    sales?: boolean | MovieCode$salesArgs<ExtArgs>
    availabilities?: boolean | MovieCode$availabilitiesArgs<ExtArgs>
    validationHistory?: boolean | MovieCode$validationHistoryArgs<ExtArgs>
    errorLogs?: boolean | MovieCode$errorLogsArgs<ExtArgs>
    recheckSchedules?: boolean | MovieCode$recheckSchedulesArgs<ExtArgs>
    _count?: boolean | MovieCodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    studio?: boolean | MovieCode$studioArgs<ExtArgs>
  }
  export type MovieCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    studio?: boolean | MovieCode$studioArgs<ExtArgs>
  }

  export type $MovieCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieCode"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
      vendor: Prisma.$VendorPayload<ExtArgs>
      studio: Prisma.$StudioPayload<ExtArgs> | null
      sales: Prisma.$SalePayload<ExtArgs> | null
      availabilities: Prisma.$CodePlatformAvailabilityPayload<ExtArgs>[]
      validationHistory: Prisma.$ValidationHistoryPayload<ExtArgs>[]
      errorLogs: Prisma.$ErrorLogPayload<ExtArgs>[]
      recheckSchedules: Prisma.$RecheckSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codeId: number
      code: string
      quality: $Enums.Quality
      status: $Enums.CodeStatus
      isBundle: boolean
      bundleTitle: string | null
      vendorId: number
      studioId: number | null
      purchasePrice: Prisma.Decimal | null
      sellingPrice: Prisma.Decimal | null
      redemptionUrl: string | null
      isVerified: boolean
      lastVerifiedAt: Date | null
      vendorOrderId: string | null
    }, ExtArgs["result"]["movieCode"]>
    composites: {}
  }

  type MovieCodeGetPayload<S extends boolean | null | undefined | MovieCodeDefaultArgs> = $Result.GetResult<Prisma.$MovieCodePayload, S>

  type MovieCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCodeCountAggregateInputType | true
    }

  export interface MovieCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieCode'], meta: { name: 'MovieCode' } }
    /**
     * Find zero or one MovieCode that matches the filter.
     * @param {MovieCodeFindUniqueArgs} args - Arguments to find a MovieCode
     * @example
     * // Get one MovieCode
     * const movieCode = await prisma.movieCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieCodeFindUniqueArgs>(args: SelectSubset<T, MovieCodeFindUniqueArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieCodeFindUniqueOrThrowArgs} args - Arguments to find a MovieCode
     * @example
     * // Get one MovieCode
     * const movieCode = await prisma.movieCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeFindFirstArgs} args - Arguments to find a MovieCode
     * @example
     * // Get one MovieCode
     * const movieCode = await prisma.movieCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieCodeFindFirstArgs>(args?: SelectSubset<T, MovieCodeFindFirstArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeFindFirstOrThrowArgs} args - Arguments to find a MovieCode
     * @example
     * // Get one MovieCode
     * const movieCode = await prisma.movieCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieCodes
     * const movieCodes = await prisma.movieCode.findMany()
     * 
     * // Get first 10 MovieCodes
     * const movieCodes = await prisma.movieCode.findMany({ take: 10 })
     * 
     * // Only select the `codeId`
     * const movieCodeWithCodeIdOnly = await prisma.movieCode.findMany({ select: { codeId: true } })
     * 
     */
    findMany<T extends MovieCodeFindManyArgs>(args?: SelectSubset<T, MovieCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieCode.
     * @param {MovieCodeCreateArgs} args - Arguments to create a MovieCode.
     * @example
     * // Create one MovieCode
     * const MovieCode = await prisma.movieCode.create({
     *   data: {
     *     // ... data to create a MovieCode
     *   }
     * })
     * 
     */
    create<T extends MovieCodeCreateArgs>(args: SelectSubset<T, MovieCodeCreateArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieCodes.
     * @param {MovieCodeCreateManyArgs} args - Arguments to create many MovieCodes.
     * @example
     * // Create many MovieCodes
     * const movieCode = await prisma.movieCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCodeCreateManyArgs>(args?: SelectSubset<T, MovieCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieCodes and returns the data saved in the database.
     * @param {MovieCodeCreateManyAndReturnArgs} args - Arguments to create many MovieCodes.
     * @example
     * // Create many MovieCodes
     * const movieCode = await prisma.movieCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieCodes and only return the `codeId`
     * const movieCodeWithCodeIdOnly = await prisma.movieCode.createManyAndReturn({
     *   select: { codeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieCode.
     * @param {MovieCodeDeleteArgs} args - Arguments to delete one MovieCode.
     * @example
     * // Delete one MovieCode
     * const MovieCode = await prisma.movieCode.delete({
     *   where: {
     *     // ... filter to delete one MovieCode
     *   }
     * })
     * 
     */
    delete<T extends MovieCodeDeleteArgs>(args: SelectSubset<T, MovieCodeDeleteArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieCode.
     * @param {MovieCodeUpdateArgs} args - Arguments to update one MovieCode.
     * @example
     * // Update one MovieCode
     * const movieCode = await prisma.movieCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieCodeUpdateArgs>(args: SelectSubset<T, MovieCodeUpdateArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieCodes.
     * @param {MovieCodeDeleteManyArgs} args - Arguments to filter MovieCodes to delete.
     * @example
     * // Delete a few MovieCodes
     * const { count } = await prisma.movieCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieCodeDeleteManyArgs>(args?: SelectSubset<T, MovieCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieCodes
     * const movieCode = await prisma.movieCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieCodeUpdateManyArgs>(args: SelectSubset<T, MovieCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieCodes and returns the data updated in the database.
     * @param {MovieCodeUpdateManyAndReturnArgs} args - Arguments to update many MovieCodes.
     * @example
     * // Update many MovieCodes
     * const movieCode = await prisma.movieCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieCodes and only return the `codeId`
     * const movieCodeWithCodeIdOnly = await prisma.movieCode.updateManyAndReturn({
     *   select: { codeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieCode.
     * @param {MovieCodeUpsertArgs} args - Arguments to update or create a MovieCode.
     * @example
     * // Update or create a MovieCode
     * const movieCode = await prisma.movieCode.upsert({
     *   create: {
     *     // ... data to create a MovieCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieCode we want to update
     *   }
     * })
     */
    upsert<T extends MovieCodeUpsertArgs>(args: SelectSubset<T, MovieCodeUpsertArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeCountArgs} args - Arguments to filter MovieCodes to count.
     * @example
     * // Count the number of MovieCodes
     * const count = await prisma.movieCode.count({
     *   where: {
     *     // ... the filter for the MovieCodes we want to count
     *   }
     * })
    **/
    count<T extends MovieCodeCountArgs>(
      args?: Subset<T, MovieCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieCodeAggregateArgs>(args: Subset<T, MovieCodeAggregateArgs>): Prisma.PrismaPromise<GetMovieCodeAggregateType<T>>

    /**
     * Group by MovieCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieCodeGroupByArgs['orderBy'] }
        : { orderBy?: MovieCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieCode model
   */
  readonly fields: MovieCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MovieCode$moviesArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studio<T extends MovieCode$studioArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$studioArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends MovieCode$salesArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$salesArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    availabilities<T extends MovieCode$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationHistory<T extends MovieCode$validationHistoryArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$validationHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    errorLogs<T extends MovieCode$errorLogsArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$errorLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recheckSchedules<T extends MovieCode$recheckSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, MovieCode$recheckSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieCode model
   */
  interface MovieCodeFieldRefs {
    readonly codeId: FieldRef<"MovieCode", 'Int'>
    readonly code: FieldRef<"MovieCode", 'String'>
    readonly quality: FieldRef<"MovieCode", 'Quality'>
    readonly status: FieldRef<"MovieCode", 'CodeStatus'>
    readonly isBundle: FieldRef<"MovieCode", 'Boolean'>
    readonly bundleTitle: FieldRef<"MovieCode", 'String'>
    readonly vendorId: FieldRef<"MovieCode", 'Int'>
    readonly studioId: FieldRef<"MovieCode", 'Int'>
    readonly purchasePrice: FieldRef<"MovieCode", 'Decimal'>
    readonly sellingPrice: FieldRef<"MovieCode", 'Decimal'>
    readonly redemptionUrl: FieldRef<"MovieCode", 'String'>
    readonly isVerified: FieldRef<"MovieCode", 'Boolean'>
    readonly lastVerifiedAt: FieldRef<"MovieCode", 'DateTime'>
    readonly vendorOrderId: FieldRef<"MovieCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieCode findUnique
   */
  export type MovieCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * Filter, which MovieCode to fetch.
     */
    where: MovieCodeWhereUniqueInput
  }

  /**
   * MovieCode findUniqueOrThrow
   */
  export type MovieCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * Filter, which MovieCode to fetch.
     */
    where: MovieCodeWhereUniqueInput
  }

  /**
   * MovieCode findFirst
   */
  export type MovieCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * Filter, which MovieCode to fetch.
     */
    where?: MovieCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCodes to fetch.
     */
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieCodes.
     */
    cursor?: MovieCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieCodes.
     */
    distinct?: MovieCodeScalarFieldEnum | MovieCodeScalarFieldEnum[]
  }

  /**
   * MovieCode findFirstOrThrow
   */
  export type MovieCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * Filter, which MovieCode to fetch.
     */
    where?: MovieCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCodes to fetch.
     */
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieCodes.
     */
    cursor?: MovieCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieCodes.
     */
    distinct?: MovieCodeScalarFieldEnum | MovieCodeScalarFieldEnum[]
  }

  /**
   * MovieCode findMany
   */
  export type MovieCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * Filter, which MovieCodes to fetch.
     */
    where?: MovieCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCodes to fetch.
     */
    orderBy?: MovieCodeOrderByWithRelationInput | MovieCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieCodes.
     */
    cursor?: MovieCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCodes.
     */
    skip?: number
    distinct?: MovieCodeScalarFieldEnum | MovieCodeScalarFieldEnum[]
  }

  /**
   * MovieCode create
   */
  export type MovieCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieCode.
     */
    data: XOR<MovieCodeCreateInput, MovieCodeUncheckedCreateInput>
  }

  /**
   * MovieCode createMany
   */
  export type MovieCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieCodes.
     */
    data: MovieCodeCreateManyInput | MovieCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieCode createManyAndReturn
   */
  export type MovieCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * The data used to create many MovieCodes.
     */
    data: MovieCodeCreateManyInput | MovieCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieCode update
   */
  export type MovieCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieCode.
     */
    data: XOR<MovieCodeUpdateInput, MovieCodeUncheckedUpdateInput>
    /**
     * Choose, which MovieCode to update.
     */
    where: MovieCodeWhereUniqueInput
  }

  /**
   * MovieCode updateMany
   */
  export type MovieCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieCodes.
     */
    data: XOR<MovieCodeUpdateManyMutationInput, MovieCodeUncheckedUpdateManyInput>
    /**
     * Filter which MovieCodes to update
     */
    where?: MovieCodeWhereInput
    /**
     * Limit how many MovieCodes to update.
     */
    limit?: number
  }

  /**
   * MovieCode updateManyAndReturn
   */
  export type MovieCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * The data used to update MovieCodes.
     */
    data: XOR<MovieCodeUpdateManyMutationInput, MovieCodeUncheckedUpdateManyInput>
    /**
     * Filter which MovieCodes to update
     */
    where?: MovieCodeWhereInput
    /**
     * Limit how many MovieCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieCode upsert
   */
  export type MovieCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieCode to update in case it exists.
     */
    where: MovieCodeWhereUniqueInput
    /**
     * In case the MovieCode found by the `where` argument doesn't exist, create a new MovieCode with this data.
     */
    create: XOR<MovieCodeCreateInput, MovieCodeUncheckedCreateInput>
    /**
     * In case the MovieCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieCodeUpdateInput, MovieCodeUncheckedUpdateInput>
  }

  /**
   * MovieCode delete
   */
  export type MovieCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    /**
     * Filter which MovieCode to delete.
     */
    where: MovieCodeWhereUniqueInput
  }

  /**
   * MovieCode deleteMany
   */
  export type MovieCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieCodes to delete
     */
    where?: MovieCodeWhereInput
    /**
     * Limit how many MovieCodes to delete.
     */
    limit?: number
  }

  /**
   * MovieCode.movies
   */
  export type MovieCode$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * MovieCode.studio
   */
  export type MovieCode$studioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    where?: StudioWhereInput
  }

  /**
   * MovieCode.sales
   */
  export type MovieCode$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
  }

  /**
   * MovieCode.availabilities
   */
  export type MovieCode$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    where?: CodePlatformAvailabilityWhereInput
    orderBy?: CodePlatformAvailabilityOrderByWithRelationInput | CodePlatformAvailabilityOrderByWithRelationInput[]
    cursor?: CodePlatformAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodePlatformAvailabilityScalarFieldEnum | CodePlatformAvailabilityScalarFieldEnum[]
  }

  /**
   * MovieCode.validationHistory
   */
  export type MovieCode$validationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    where?: ValidationHistoryWhereInput
    orderBy?: ValidationHistoryOrderByWithRelationInput | ValidationHistoryOrderByWithRelationInput[]
    cursor?: ValidationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValidationHistoryScalarFieldEnum | ValidationHistoryScalarFieldEnum[]
  }

  /**
   * MovieCode.errorLogs
   */
  export type MovieCode$errorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    cursor?: ErrorLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * MovieCode.recheckSchedules
   */
  export type MovieCode$recheckSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    where?: RecheckScheduleWhereInput
    orderBy?: RecheckScheduleOrderByWithRelationInput | RecheckScheduleOrderByWithRelationInput[]
    cursor?: RecheckScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecheckScheduleScalarFieldEnum | RecheckScheduleScalarFieldEnum[]
  }

  /**
   * MovieCode without action
   */
  export type MovieCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    saleId: number | null
    codeId: number | null
    customerId: number | null
    salePrice: Decimal | null
    purchaseCost: Decimal | null
    netProfit: Decimal | null
  }

  export type SaleSumAggregateOutputType = {
    saleId: number | null
    codeId: number | null
    customerId: number | null
    salePrice: Decimal | null
    purchaseCost: Decimal | null
    netProfit: Decimal | null
  }

  export type SaleMinAggregateOutputType = {
    saleId: number | null
    codeId: number | null
    customerId: number | null
    saleDate: Date | null
    salePrice: Decimal | null
    purchaseCost: Decimal | null
    netProfit: Decimal | null
  }

  export type SaleMaxAggregateOutputType = {
    saleId: number | null
    codeId: number | null
    customerId: number | null
    saleDate: Date | null
    salePrice: Decimal | null
    purchaseCost: Decimal | null
    netProfit: Decimal | null
  }

  export type SaleCountAggregateOutputType = {
    saleId: number
    codeId: number
    customerId: number
    saleDate: number
    salePrice: number
    purchaseCost: number
    netProfit: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    saleId?: true
    codeId?: true
    customerId?: true
    salePrice?: true
    purchaseCost?: true
    netProfit?: true
  }

  export type SaleSumAggregateInputType = {
    saleId?: true
    codeId?: true
    customerId?: true
    salePrice?: true
    purchaseCost?: true
    netProfit?: true
  }

  export type SaleMinAggregateInputType = {
    saleId?: true
    codeId?: true
    customerId?: true
    saleDate?: true
    salePrice?: true
    purchaseCost?: true
    netProfit?: true
  }

  export type SaleMaxAggregateInputType = {
    saleId?: true
    codeId?: true
    customerId?: true
    saleDate?: true
    salePrice?: true
    purchaseCost?: true
    netProfit?: true
  }

  export type SaleCountAggregateInputType = {
    saleId?: true
    codeId?: true
    customerId?: true
    saleDate?: true
    salePrice?: true
    purchaseCost?: true
    netProfit?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    saleId: number
    codeId: number
    customerId: number | null
    saleDate: Date
    salePrice: Decimal
    purchaseCost: Decimal | null
    netProfit: Decimal
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    codeId?: boolean
    customerId?: boolean
    saleDate?: boolean
    salePrice?: boolean
    purchaseCost?: boolean
    netProfit?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    codeId?: boolean
    customerId?: boolean
    saleDate?: boolean
    salePrice?: boolean
    purchaseCost?: boolean
    netProfit?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    codeId?: boolean
    customerId?: boolean
    saleDate?: boolean
    salePrice?: boolean
    purchaseCost?: boolean
    netProfit?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    saleId?: boolean
    codeId?: boolean
    customerId?: boolean
    saleDate?: boolean
    salePrice?: boolean
    purchaseCost?: boolean
    netProfit?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"saleId" | "codeId" | "customerId" | "saleDate" | "salePrice" | "purchaseCost" | "netProfit", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      code: Prisma.$MovieCodePayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      saleId: number
      codeId: number
      customerId: number | null
      saleDate: Date
      salePrice: Prisma.Decimal
      purchaseCost: Prisma.Decimal | null
      netProfit: Prisma.Decimal
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `saleId`
     * const saleWithSaleIdOnly = await prisma.sale.findMany({ select: { saleId: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `saleId`
     * const saleWithSaleIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { saleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `saleId`
     * const saleWithSaleIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { saleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    code<T extends MovieCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieCodeDefaultArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends Sale$customerArgs<ExtArgs> = {}>(args?: Subset<T, Sale$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly saleId: FieldRef<"Sale", 'Int'>
    readonly codeId: FieldRef<"Sale", 'Int'>
    readonly customerId: FieldRef<"Sale", 'Int'>
    readonly saleDate: FieldRef<"Sale", 'DateTime'>
    readonly salePrice: FieldRef<"Sale", 'Decimal'>
    readonly purchaseCost: FieldRef<"Sale", 'Decimal'>
    readonly netProfit: FieldRef<"Sale", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.customer
   */
  export type Sale$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model CodePlatformAvailability
   */

  export type AggregateCodePlatformAvailability = {
    _count: CodePlatformAvailabilityCountAggregateOutputType | null
    _avg: CodePlatformAvailabilityAvgAggregateOutputType | null
    _sum: CodePlatformAvailabilitySumAggregateOutputType | null
    _min: CodePlatformAvailabilityMinAggregateOutputType | null
    _max: CodePlatformAvailabilityMaxAggregateOutputType | null
  }

  export type CodePlatformAvailabilityAvgAggregateOutputType = {
    availabilityId: number | null
    codeId: number | null
    platformId: number | null
  }

  export type CodePlatformAvailabilitySumAggregateOutputType = {
    availabilityId: number | null
    codeId: number | null
    platformId: number | null
  }

  export type CodePlatformAvailabilityMinAggregateOutputType = {
    availabilityId: number | null
    codeId: number | null
    platformId: number | null
    isValid: boolean | null
  }

  export type CodePlatformAvailabilityMaxAggregateOutputType = {
    availabilityId: number | null
    codeId: number | null
    platformId: number | null
    isValid: boolean | null
  }

  export type CodePlatformAvailabilityCountAggregateOutputType = {
    availabilityId: number
    codeId: number
    platformId: number
    isValid: number
    _all: number
  }


  export type CodePlatformAvailabilityAvgAggregateInputType = {
    availabilityId?: true
    codeId?: true
    platformId?: true
  }

  export type CodePlatformAvailabilitySumAggregateInputType = {
    availabilityId?: true
    codeId?: true
    platformId?: true
  }

  export type CodePlatformAvailabilityMinAggregateInputType = {
    availabilityId?: true
    codeId?: true
    platformId?: true
    isValid?: true
  }

  export type CodePlatformAvailabilityMaxAggregateInputType = {
    availabilityId?: true
    codeId?: true
    platformId?: true
    isValid?: true
  }

  export type CodePlatformAvailabilityCountAggregateInputType = {
    availabilityId?: true
    codeId?: true
    platformId?: true
    isValid?: true
    _all?: true
  }

  export type CodePlatformAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodePlatformAvailability to aggregate.
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodePlatformAvailabilities to fetch.
     */
    orderBy?: CodePlatformAvailabilityOrderByWithRelationInput | CodePlatformAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodePlatformAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodePlatformAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodePlatformAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodePlatformAvailabilities
    **/
    _count?: true | CodePlatformAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodePlatformAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodePlatformAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodePlatformAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodePlatformAvailabilityMaxAggregateInputType
  }

  export type GetCodePlatformAvailabilityAggregateType<T extends CodePlatformAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateCodePlatformAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodePlatformAvailability[P]>
      : GetScalarType<T[P], AggregateCodePlatformAvailability[P]>
  }




  export type CodePlatformAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodePlatformAvailabilityWhereInput
    orderBy?: CodePlatformAvailabilityOrderByWithAggregationInput | CodePlatformAvailabilityOrderByWithAggregationInput[]
    by: CodePlatformAvailabilityScalarFieldEnum[] | CodePlatformAvailabilityScalarFieldEnum
    having?: CodePlatformAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodePlatformAvailabilityCountAggregateInputType | true
    _avg?: CodePlatformAvailabilityAvgAggregateInputType
    _sum?: CodePlatformAvailabilitySumAggregateInputType
    _min?: CodePlatformAvailabilityMinAggregateInputType
    _max?: CodePlatformAvailabilityMaxAggregateInputType
  }

  export type CodePlatformAvailabilityGroupByOutputType = {
    availabilityId: number
    codeId: number
    platformId: number
    isValid: boolean
    _count: CodePlatformAvailabilityCountAggregateOutputType | null
    _avg: CodePlatformAvailabilityAvgAggregateOutputType | null
    _sum: CodePlatformAvailabilitySumAggregateOutputType | null
    _min: CodePlatformAvailabilityMinAggregateOutputType | null
    _max: CodePlatformAvailabilityMaxAggregateOutputType | null
  }

  type GetCodePlatformAvailabilityGroupByPayload<T extends CodePlatformAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodePlatformAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodePlatformAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodePlatformAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], CodePlatformAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type CodePlatformAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    availabilityId?: boolean
    codeId?: boolean
    platformId?: boolean
    isValid?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    platform?: boolean | RedemptionPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codePlatformAvailability"]>

  export type CodePlatformAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    availabilityId?: boolean
    codeId?: boolean
    platformId?: boolean
    isValid?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    platform?: boolean | RedemptionPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codePlatformAvailability"]>

  export type CodePlatformAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    availabilityId?: boolean
    codeId?: boolean
    platformId?: boolean
    isValid?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    platform?: boolean | RedemptionPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codePlatformAvailability"]>

  export type CodePlatformAvailabilitySelectScalar = {
    availabilityId?: boolean
    codeId?: boolean
    platformId?: boolean
    isValid?: boolean
  }

  export type CodePlatformAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"availabilityId" | "codeId" | "platformId" | "isValid", ExtArgs["result"]["codePlatformAvailability"]>
  export type CodePlatformAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    platform?: boolean | RedemptionPlatformDefaultArgs<ExtArgs>
  }
  export type CodePlatformAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    platform?: boolean | RedemptionPlatformDefaultArgs<ExtArgs>
  }
  export type CodePlatformAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
    platform?: boolean | RedemptionPlatformDefaultArgs<ExtArgs>
  }

  export type $CodePlatformAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodePlatformAvailability"
    objects: {
      code: Prisma.$MovieCodePayload<ExtArgs>
      platform: Prisma.$RedemptionPlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      availabilityId: number
      codeId: number
      platformId: number
      isValid: boolean
    }, ExtArgs["result"]["codePlatformAvailability"]>
    composites: {}
  }

  type CodePlatformAvailabilityGetPayload<S extends boolean | null | undefined | CodePlatformAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$CodePlatformAvailabilityPayload, S>

  type CodePlatformAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodePlatformAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodePlatformAvailabilityCountAggregateInputType | true
    }

  export interface CodePlatformAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodePlatformAvailability'], meta: { name: 'CodePlatformAvailability' } }
    /**
     * Find zero or one CodePlatformAvailability that matches the filter.
     * @param {CodePlatformAvailabilityFindUniqueArgs} args - Arguments to find a CodePlatformAvailability
     * @example
     * // Get one CodePlatformAvailability
     * const codePlatformAvailability = await prisma.codePlatformAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodePlatformAvailabilityFindUniqueArgs>(args: SelectSubset<T, CodePlatformAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodePlatformAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodePlatformAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a CodePlatformAvailability
     * @example
     * // Get one CodePlatformAvailability
     * const codePlatformAvailability = await prisma.codePlatformAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodePlatformAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, CodePlatformAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodePlatformAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityFindFirstArgs} args - Arguments to find a CodePlatformAvailability
     * @example
     * // Get one CodePlatformAvailability
     * const codePlatformAvailability = await prisma.codePlatformAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodePlatformAvailabilityFindFirstArgs>(args?: SelectSubset<T, CodePlatformAvailabilityFindFirstArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodePlatformAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityFindFirstOrThrowArgs} args - Arguments to find a CodePlatformAvailability
     * @example
     * // Get one CodePlatformAvailability
     * const codePlatformAvailability = await prisma.codePlatformAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodePlatformAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, CodePlatformAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodePlatformAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodePlatformAvailabilities
     * const codePlatformAvailabilities = await prisma.codePlatformAvailability.findMany()
     * 
     * // Get first 10 CodePlatformAvailabilities
     * const codePlatformAvailabilities = await prisma.codePlatformAvailability.findMany({ take: 10 })
     * 
     * // Only select the `availabilityId`
     * const codePlatformAvailabilityWithAvailabilityIdOnly = await prisma.codePlatformAvailability.findMany({ select: { availabilityId: true } })
     * 
     */
    findMany<T extends CodePlatformAvailabilityFindManyArgs>(args?: SelectSubset<T, CodePlatformAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodePlatformAvailability.
     * @param {CodePlatformAvailabilityCreateArgs} args - Arguments to create a CodePlatformAvailability.
     * @example
     * // Create one CodePlatformAvailability
     * const CodePlatformAvailability = await prisma.codePlatformAvailability.create({
     *   data: {
     *     // ... data to create a CodePlatformAvailability
     *   }
     * })
     * 
     */
    create<T extends CodePlatformAvailabilityCreateArgs>(args: SelectSubset<T, CodePlatformAvailabilityCreateArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodePlatformAvailabilities.
     * @param {CodePlatformAvailabilityCreateManyArgs} args - Arguments to create many CodePlatformAvailabilities.
     * @example
     * // Create many CodePlatformAvailabilities
     * const codePlatformAvailability = await prisma.codePlatformAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodePlatformAvailabilityCreateManyArgs>(args?: SelectSubset<T, CodePlatformAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodePlatformAvailabilities and returns the data saved in the database.
     * @param {CodePlatformAvailabilityCreateManyAndReturnArgs} args - Arguments to create many CodePlatformAvailabilities.
     * @example
     * // Create many CodePlatformAvailabilities
     * const codePlatformAvailability = await prisma.codePlatformAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodePlatformAvailabilities and only return the `availabilityId`
     * const codePlatformAvailabilityWithAvailabilityIdOnly = await prisma.codePlatformAvailability.createManyAndReturn({
     *   select: { availabilityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodePlatformAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, CodePlatformAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodePlatformAvailability.
     * @param {CodePlatformAvailabilityDeleteArgs} args - Arguments to delete one CodePlatformAvailability.
     * @example
     * // Delete one CodePlatformAvailability
     * const CodePlatformAvailability = await prisma.codePlatformAvailability.delete({
     *   where: {
     *     // ... filter to delete one CodePlatformAvailability
     *   }
     * })
     * 
     */
    delete<T extends CodePlatformAvailabilityDeleteArgs>(args: SelectSubset<T, CodePlatformAvailabilityDeleteArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodePlatformAvailability.
     * @param {CodePlatformAvailabilityUpdateArgs} args - Arguments to update one CodePlatformAvailability.
     * @example
     * // Update one CodePlatformAvailability
     * const codePlatformAvailability = await prisma.codePlatformAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodePlatformAvailabilityUpdateArgs>(args: SelectSubset<T, CodePlatformAvailabilityUpdateArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodePlatformAvailabilities.
     * @param {CodePlatformAvailabilityDeleteManyArgs} args - Arguments to filter CodePlatformAvailabilities to delete.
     * @example
     * // Delete a few CodePlatformAvailabilities
     * const { count } = await prisma.codePlatformAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodePlatformAvailabilityDeleteManyArgs>(args?: SelectSubset<T, CodePlatformAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodePlatformAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodePlatformAvailabilities
     * const codePlatformAvailability = await prisma.codePlatformAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodePlatformAvailabilityUpdateManyArgs>(args: SelectSubset<T, CodePlatformAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodePlatformAvailabilities and returns the data updated in the database.
     * @param {CodePlatformAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many CodePlatformAvailabilities.
     * @example
     * // Update many CodePlatformAvailabilities
     * const codePlatformAvailability = await prisma.codePlatformAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodePlatformAvailabilities and only return the `availabilityId`
     * const codePlatformAvailabilityWithAvailabilityIdOnly = await prisma.codePlatformAvailability.updateManyAndReturn({
     *   select: { availabilityId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodePlatformAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, CodePlatformAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodePlatformAvailability.
     * @param {CodePlatformAvailabilityUpsertArgs} args - Arguments to update or create a CodePlatformAvailability.
     * @example
     * // Update or create a CodePlatformAvailability
     * const codePlatformAvailability = await prisma.codePlatformAvailability.upsert({
     *   create: {
     *     // ... data to create a CodePlatformAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodePlatformAvailability we want to update
     *   }
     * })
     */
    upsert<T extends CodePlatformAvailabilityUpsertArgs>(args: SelectSubset<T, CodePlatformAvailabilityUpsertArgs<ExtArgs>>): Prisma__CodePlatformAvailabilityClient<$Result.GetResult<Prisma.$CodePlatformAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodePlatformAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityCountArgs} args - Arguments to filter CodePlatformAvailabilities to count.
     * @example
     * // Count the number of CodePlatformAvailabilities
     * const count = await prisma.codePlatformAvailability.count({
     *   where: {
     *     // ... the filter for the CodePlatformAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends CodePlatformAvailabilityCountArgs>(
      args?: Subset<T, CodePlatformAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodePlatformAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodePlatformAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodePlatformAvailabilityAggregateArgs>(args: Subset<T, CodePlatformAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetCodePlatformAvailabilityAggregateType<T>>

    /**
     * Group by CodePlatformAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodePlatformAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodePlatformAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodePlatformAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: CodePlatformAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodePlatformAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodePlatformAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodePlatformAvailability model
   */
  readonly fields: CodePlatformAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodePlatformAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodePlatformAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    code<T extends MovieCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieCodeDefaultArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends RedemptionPlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RedemptionPlatformDefaultArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodePlatformAvailability model
   */
  interface CodePlatformAvailabilityFieldRefs {
    readonly availabilityId: FieldRef<"CodePlatformAvailability", 'Int'>
    readonly codeId: FieldRef<"CodePlatformAvailability", 'Int'>
    readonly platformId: FieldRef<"CodePlatformAvailability", 'Int'>
    readonly isValid: FieldRef<"CodePlatformAvailability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CodePlatformAvailability findUnique
   */
  export type CodePlatformAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which CodePlatformAvailability to fetch.
     */
    where: CodePlatformAvailabilityWhereUniqueInput
  }

  /**
   * CodePlatformAvailability findUniqueOrThrow
   */
  export type CodePlatformAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which CodePlatformAvailability to fetch.
     */
    where: CodePlatformAvailabilityWhereUniqueInput
  }

  /**
   * CodePlatformAvailability findFirst
   */
  export type CodePlatformAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which CodePlatformAvailability to fetch.
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodePlatformAvailabilities to fetch.
     */
    orderBy?: CodePlatformAvailabilityOrderByWithRelationInput | CodePlatformAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodePlatformAvailabilities.
     */
    cursor?: CodePlatformAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodePlatformAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodePlatformAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodePlatformAvailabilities.
     */
    distinct?: CodePlatformAvailabilityScalarFieldEnum | CodePlatformAvailabilityScalarFieldEnum[]
  }

  /**
   * CodePlatformAvailability findFirstOrThrow
   */
  export type CodePlatformAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which CodePlatformAvailability to fetch.
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodePlatformAvailabilities to fetch.
     */
    orderBy?: CodePlatformAvailabilityOrderByWithRelationInput | CodePlatformAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodePlatformAvailabilities.
     */
    cursor?: CodePlatformAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodePlatformAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodePlatformAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodePlatformAvailabilities.
     */
    distinct?: CodePlatformAvailabilityScalarFieldEnum | CodePlatformAvailabilityScalarFieldEnum[]
  }

  /**
   * CodePlatformAvailability findMany
   */
  export type CodePlatformAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which CodePlatformAvailabilities to fetch.
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodePlatformAvailabilities to fetch.
     */
    orderBy?: CodePlatformAvailabilityOrderByWithRelationInput | CodePlatformAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodePlatformAvailabilities.
     */
    cursor?: CodePlatformAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodePlatformAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodePlatformAvailabilities.
     */
    skip?: number
    distinct?: CodePlatformAvailabilityScalarFieldEnum | CodePlatformAvailabilityScalarFieldEnum[]
  }

  /**
   * CodePlatformAvailability create
   */
  export type CodePlatformAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a CodePlatformAvailability.
     */
    data: XOR<CodePlatformAvailabilityCreateInput, CodePlatformAvailabilityUncheckedCreateInput>
  }

  /**
   * CodePlatformAvailability createMany
   */
  export type CodePlatformAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodePlatformAvailabilities.
     */
    data: CodePlatformAvailabilityCreateManyInput | CodePlatformAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodePlatformAvailability createManyAndReturn
   */
  export type CodePlatformAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many CodePlatformAvailabilities.
     */
    data: CodePlatformAvailabilityCreateManyInput | CodePlatformAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodePlatformAvailability update
   */
  export type CodePlatformAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a CodePlatformAvailability.
     */
    data: XOR<CodePlatformAvailabilityUpdateInput, CodePlatformAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which CodePlatformAvailability to update.
     */
    where: CodePlatformAvailabilityWhereUniqueInput
  }

  /**
   * CodePlatformAvailability updateMany
   */
  export type CodePlatformAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodePlatformAvailabilities.
     */
    data: XOR<CodePlatformAvailabilityUpdateManyMutationInput, CodePlatformAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which CodePlatformAvailabilities to update
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * Limit how many CodePlatformAvailabilities to update.
     */
    limit?: number
  }

  /**
   * CodePlatformAvailability updateManyAndReturn
   */
  export type CodePlatformAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update CodePlatformAvailabilities.
     */
    data: XOR<CodePlatformAvailabilityUpdateManyMutationInput, CodePlatformAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which CodePlatformAvailabilities to update
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * Limit how many CodePlatformAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodePlatformAvailability upsert
   */
  export type CodePlatformAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the CodePlatformAvailability to update in case it exists.
     */
    where: CodePlatformAvailabilityWhereUniqueInput
    /**
     * In case the CodePlatformAvailability found by the `where` argument doesn't exist, create a new CodePlatformAvailability with this data.
     */
    create: XOR<CodePlatformAvailabilityCreateInput, CodePlatformAvailabilityUncheckedCreateInput>
    /**
     * In case the CodePlatformAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodePlatformAvailabilityUpdateInput, CodePlatformAvailabilityUncheckedUpdateInput>
  }

  /**
   * CodePlatformAvailability delete
   */
  export type CodePlatformAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which CodePlatformAvailability to delete.
     */
    where: CodePlatformAvailabilityWhereUniqueInput
  }

  /**
   * CodePlatformAvailability deleteMany
   */
  export type CodePlatformAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodePlatformAvailabilities to delete
     */
    where?: CodePlatformAvailabilityWhereInput
    /**
     * Limit how many CodePlatformAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * CodePlatformAvailability without action
   */
  export type CodePlatformAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodePlatformAvailability
     */
    select?: CodePlatformAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodePlatformAvailability
     */
    omit?: CodePlatformAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodePlatformAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model ValidationHistory
   */

  export type AggregateValidationHistory = {
    _count: ValidationHistoryCountAggregateOutputType | null
    _avg: ValidationHistoryAvgAggregateOutputType | null
    _sum: ValidationHistorySumAggregateOutputType | null
    _min: ValidationHistoryMinAggregateOutputType | null
    _max: ValidationHistoryMaxAggregateOutputType | null
  }

  export type ValidationHistoryAvgAggregateOutputType = {
    validationId: number | null
    codeId: number | null
    platformId: number | null
  }

  export type ValidationHistorySumAggregateOutputType = {
    validationId: number | null
    codeId: number | null
    platformId: number | null
  }

  export type ValidationHistoryMinAggregateOutputType = {
    validationId: number | null
    codeId: number | null
    platformId: number | null
    validationDate: Date | null
    isValid: boolean | null
    validationMethod: string | null
  }

  export type ValidationHistoryMaxAggregateOutputType = {
    validationId: number | null
    codeId: number | null
    platformId: number | null
    validationDate: Date | null
    isValid: boolean | null
    validationMethod: string | null
  }

  export type ValidationHistoryCountAggregateOutputType = {
    validationId: number
    codeId: number
    platformId: number
    validationDate: number
    isValid: number
    validationMethod: number
    _all: number
  }


  export type ValidationHistoryAvgAggregateInputType = {
    validationId?: true
    codeId?: true
    platformId?: true
  }

  export type ValidationHistorySumAggregateInputType = {
    validationId?: true
    codeId?: true
    platformId?: true
  }

  export type ValidationHistoryMinAggregateInputType = {
    validationId?: true
    codeId?: true
    platformId?: true
    validationDate?: true
    isValid?: true
    validationMethod?: true
  }

  export type ValidationHistoryMaxAggregateInputType = {
    validationId?: true
    codeId?: true
    platformId?: true
    validationDate?: true
    isValid?: true
    validationMethod?: true
  }

  export type ValidationHistoryCountAggregateInputType = {
    validationId?: true
    codeId?: true
    platformId?: true
    validationDate?: true
    isValid?: true
    validationMethod?: true
    _all?: true
  }

  export type ValidationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValidationHistory to aggregate.
     */
    where?: ValidationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValidationHistories to fetch.
     */
    orderBy?: ValidationHistoryOrderByWithRelationInput | ValidationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValidationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValidationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValidationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ValidationHistories
    **/
    _count?: true | ValidationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValidationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValidationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValidationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValidationHistoryMaxAggregateInputType
  }

  export type GetValidationHistoryAggregateType<T extends ValidationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateValidationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValidationHistory[P]>
      : GetScalarType<T[P], AggregateValidationHistory[P]>
  }




  export type ValidationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidationHistoryWhereInput
    orderBy?: ValidationHistoryOrderByWithAggregationInput | ValidationHistoryOrderByWithAggregationInput[]
    by: ValidationHistoryScalarFieldEnum[] | ValidationHistoryScalarFieldEnum
    having?: ValidationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValidationHistoryCountAggregateInputType | true
    _avg?: ValidationHistoryAvgAggregateInputType
    _sum?: ValidationHistorySumAggregateInputType
    _min?: ValidationHistoryMinAggregateInputType
    _max?: ValidationHistoryMaxAggregateInputType
  }

  export type ValidationHistoryGroupByOutputType = {
    validationId: number
    codeId: number
    platformId: number | null
    validationDate: Date
    isValid: boolean
    validationMethod: string | null
    _count: ValidationHistoryCountAggregateOutputType | null
    _avg: ValidationHistoryAvgAggregateOutputType | null
    _sum: ValidationHistorySumAggregateOutputType | null
    _min: ValidationHistoryMinAggregateOutputType | null
    _max: ValidationHistoryMaxAggregateOutputType | null
  }

  type GetValidationHistoryGroupByPayload<T extends ValidationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValidationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValidationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValidationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ValidationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ValidationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    validationId?: boolean
    codeId?: boolean
    platformId?: boolean
    validationDate?: boolean
    isValid?: boolean
    validationMethod?: boolean
    code?: boolean | ValidationHistory$codeArgs<ExtArgs>
    platform?: boolean | ValidationHistory$platformArgs<ExtArgs>
  }, ExtArgs["result"]["validationHistory"]>

  export type ValidationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    validationId?: boolean
    codeId?: boolean
    platformId?: boolean
    validationDate?: boolean
    isValid?: boolean
    validationMethod?: boolean
    code?: boolean | ValidationHistory$codeArgs<ExtArgs>
    platform?: boolean | ValidationHistory$platformArgs<ExtArgs>
  }, ExtArgs["result"]["validationHistory"]>

  export type ValidationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    validationId?: boolean
    codeId?: boolean
    platformId?: boolean
    validationDate?: boolean
    isValid?: boolean
    validationMethod?: boolean
    code?: boolean | ValidationHistory$codeArgs<ExtArgs>
    platform?: boolean | ValidationHistory$platformArgs<ExtArgs>
  }, ExtArgs["result"]["validationHistory"]>

  export type ValidationHistorySelectScalar = {
    validationId?: boolean
    codeId?: boolean
    platformId?: boolean
    validationDate?: boolean
    isValid?: boolean
    validationMethod?: boolean
  }

  export type ValidationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"validationId" | "codeId" | "platformId" | "validationDate" | "isValid" | "validationMethod", ExtArgs["result"]["validationHistory"]>
  export type ValidationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | ValidationHistory$codeArgs<ExtArgs>
    platform?: boolean | ValidationHistory$platformArgs<ExtArgs>
  }
  export type ValidationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | ValidationHistory$codeArgs<ExtArgs>
    platform?: boolean | ValidationHistory$platformArgs<ExtArgs>
  }
  export type ValidationHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | ValidationHistory$codeArgs<ExtArgs>
    platform?: boolean | ValidationHistory$platformArgs<ExtArgs>
  }

  export type $ValidationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ValidationHistory"
    objects: {
      code: Prisma.$MovieCodePayload<ExtArgs> | null
      platform: Prisma.$RedemptionPlatformPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      validationId: number
      codeId: number
      platformId: number | null
      validationDate: Date
      isValid: boolean
      validationMethod: string | null
    }, ExtArgs["result"]["validationHistory"]>
    composites: {}
  }

  type ValidationHistoryGetPayload<S extends boolean | null | undefined | ValidationHistoryDefaultArgs> = $Result.GetResult<Prisma.$ValidationHistoryPayload, S>

  type ValidationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValidationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValidationHistoryCountAggregateInputType | true
    }

  export interface ValidationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ValidationHistory'], meta: { name: 'ValidationHistory' } }
    /**
     * Find zero or one ValidationHistory that matches the filter.
     * @param {ValidationHistoryFindUniqueArgs} args - Arguments to find a ValidationHistory
     * @example
     * // Get one ValidationHistory
     * const validationHistory = await prisma.validationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValidationHistoryFindUniqueArgs>(args: SelectSubset<T, ValidationHistoryFindUniqueArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ValidationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValidationHistoryFindUniqueOrThrowArgs} args - Arguments to find a ValidationHistory
     * @example
     * // Get one ValidationHistory
     * const validationHistory = await prisma.validationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValidationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ValidationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ValidationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryFindFirstArgs} args - Arguments to find a ValidationHistory
     * @example
     * // Get one ValidationHistory
     * const validationHistory = await prisma.validationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValidationHistoryFindFirstArgs>(args?: SelectSubset<T, ValidationHistoryFindFirstArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ValidationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryFindFirstOrThrowArgs} args - Arguments to find a ValidationHistory
     * @example
     * // Get one ValidationHistory
     * const validationHistory = await prisma.validationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValidationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ValidationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ValidationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ValidationHistories
     * const validationHistories = await prisma.validationHistory.findMany()
     * 
     * // Get first 10 ValidationHistories
     * const validationHistories = await prisma.validationHistory.findMany({ take: 10 })
     * 
     * // Only select the `validationId`
     * const validationHistoryWithValidationIdOnly = await prisma.validationHistory.findMany({ select: { validationId: true } })
     * 
     */
    findMany<T extends ValidationHistoryFindManyArgs>(args?: SelectSubset<T, ValidationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ValidationHistory.
     * @param {ValidationHistoryCreateArgs} args - Arguments to create a ValidationHistory.
     * @example
     * // Create one ValidationHistory
     * const ValidationHistory = await prisma.validationHistory.create({
     *   data: {
     *     // ... data to create a ValidationHistory
     *   }
     * })
     * 
     */
    create<T extends ValidationHistoryCreateArgs>(args: SelectSubset<T, ValidationHistoryCreateArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ValidationHistories.
     * @param {ValidationHistoryCreateManyArgs} args - Arguments to create many ValidationHistories.
     * @example
     * // Create many ValidationHistories
     * const validationHistory = await prisma.validationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValidationHistoryCreateManyArgs>(args?: SelectSubset<T, ValidationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ValidationHistories and returns the data saved in the database.
     * @param {ValidationHistoryCreateManyAndReturnArgs} args - Arguments to create many ValidationHistories.
     * @example
     * // Create many ValidationHistories
     * const validationHistory = await prisma.validationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ValidationHistories and only return the `validationId`
     * const validationHistoryWithValidationIdOnly = await prisma.validationHistory.createManyAndReturn({
     *   select: { validationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValidationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ValidationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ValidationHistory.
     * @param {ValidationHistoryDeleteArgs} args - Arguments to delete one ValidationHistory.
     * @example
     * // Delete one ValidationHistory
     * const ValidationHistory = await prisma.validationHistory.delete({
     *   where: {
     *     // ... filter to delete one ValidationHistory
     *   }
     * })
     * 
     */
    delete<T extends ValidationHistoryDeleteArgs>(args: SelectSubset<T, ValidationHistoryDeleteArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ValidationHistory.
     * @param {ValidationHistoryUpdateArgs} args - Arguments to update one ValidationHistory.
     * @example
     * // Update one ValidationHistory
     * const validationHistory = await prisma.validationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValidationHistoryUpdateArgs>(args: SelectSubset<T, ValidationHistoryUpdateArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ValidationHistories.
     * @param {ValidationHistoryDeleteManyArgs} args - Arguments to filter ValidationHistories to delete.
     * @example
     * // Delete a few ValidationHistories
     * const { count } = await prisma.validationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValidationHistoryDeleteManyArgs>(args?: SelectSubset<T, ValidationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValidationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ValidationHistories
     * const validationHistory = await prisma.validationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValidationHistoryUpdateManyArgs>(args: SelectSubset<T, ValidationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValidationHistories and returns the data updated in the database.
     * @param {ValidationHistoryUpdateManyAndReturnArgs} args - Arguments to update many ValidationHistories.
     * @example
     * // Update many ValidationHistories
     * const validationHistory = await prisma.validationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ValidationHistories and only return the `validationId`
     * const validationHistoryWithValidationIdOnly = await prisma.validationHistory.updateManyAndReturn({
     *   select: { validationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ValidationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ValidationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ValidationHistory.
     * @param {ValidationHistoryUpsertArgs} args - Arguments to update or create a ValidationHistory.
     * @example
     * // Update or create a ValidationHistory
     * const validationHistory = await prisma.validationHistory.upsert({
     *   create: {
     *     // ... data to create a ValidationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ValidationHistory we want to update
     *   }
     * })
     */
    upsert<T extends ValidationHistoryUpsertArgs>(args: SelectSubset<T, ValidationHistoryUpsertArgs<ExtArgs>>): Prisma__ValidationHistoryClient<$Result.GetResult<Prisma.$ValidationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ValidationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryCountArgs} args - Arguments to filter ValidationHistories to count.
     * @example
     * // Count the number of ValidationHistories
     * const count = await prisma.validationHistory.count({
     *   where: {
     *     // ... the filter for the ValidationHistories we want to count
     *   }
     * })
    **/
    count<T extends ValidationHistoryCountArgs>(
      args?: Subset<T, ValidationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValidationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ValidationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValidationHistoryAggregateArgs>(args: Subset<T, ValidationHistoryAggregateArgs>): Prisma.PrismaPromise<GetValidationHistoryAggregateType<T>>

    /**
     * Group by ValidationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValidationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValidationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ValidationHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValidationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ValidationHistory model
   */
  readonly fields: ValidationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ValidationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValidationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    code<T extends ValidationHistory$codeArgs<ExtArgs> = {}>(args?: Subset<T, ValidationHistory$codeArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    platform<T extends ValidationHistory$platformArgs<ExtArgs> = {}>(args?: Subset<T, ValidationHistory$platformArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ValidationHistory model
   */
  interface ValidationHistoryFieldRefs {
    readonly validationId: FieldRef<"ValidationHistory", 'Int'>
    readonly codeId: FieldRef<"ValidationHistory", 'Int'>
    readonly platformId: FieldRef<"ValidationHistory", 'Int'>
    readonly validationDate: FieldRef<"ValidationHistory", 'DateTime'>
    readonly isValid: FieldRef<"ValidationHistory", 'Boolean'>
    readonly validationMethod: FieldRef<"ValidationHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ValidationHistory findUnique
   */
  export type ValidationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ValidationHistory to fetch.
     */
    where: ValidationHistoryWhereUniqueInput
  }

  /**
   * ValidationHistory findUniqueOrThrow
   */
  export type ValidationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ValidationHistory to fetch.
     */
    where: ValidationHistoryWhereUniqueInput
  }

  /**
   * ValidationHistory findFirst
   */
  export type ValidationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ValidationHistory to fetch.
     */
    where?: ValidationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValidationHistories to fetch.
     */
    orderBy?: ValidationHistoryOrderByWithRelationInput | ValidationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValidationHistories.
     */
    cursor?: ValidationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValidationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValidationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValidationHistories.
     */
    distinct?: ValidationHistoryScalarFieldEnum | ValidationHistoryScalarFieldEnum[]
  }

  /**
   * ValidationHistory findFirstOrThrow
   */
  export type ValidationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ValidationHistory to fetch.
     */
    where?: ValidationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValidationHistories to fetch.
     */
    orderBy?: ValidationHistoryOrderByWithRelationInput | ValidationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValidationHistories.
     */
    cursor?: ValidationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValidationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValidationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValidationHistories.
     */
    distinct?: ValidationHistoryScalarFieldEnum | ValidationHistoryScalarFieldEnum[]
  }

  /**
   * ValidationHistory findMany
   */
  export type ValidationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ValidationHistories to fetch.
     */
    where?: ValidationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValidationHistories to fetch.
     */
    orderBy?: ValidationHistoryOrderByWithRelationInput | ValidationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ValidationHistories.
     */
    cursor?: ValidationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValidationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValidationHistories.
     */
    skip?: number
    distinct?: ValidationHistoryScalarFieldEnum | ValidationHistoryScalarFieldEnum[]
  }

  /**
   * ValidationHistory create
   */
  export type ValidationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ValidationHistory.
     */
    data: XOR<ValidationHistoryCreateInput, ValidationHistoryUncheckedCreateInput>
  }

  /**
   * ValidationHistory createMany
   */
  export type ValidationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ValidationHistories.
     */
    data: ValidationHistoryCreateManyInput | ValidationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValidationHistory createManyAndReturn
   */
  export type ValidationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ValidationHistories.
     */
    data: ValidationHistoryCreateManyInput | ValidationHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ValidationHistory update
   */
  export type ValidationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ValidationHistory.
     */
    data: XOR<ValidationHistoryUpdateInput, ValidationHistoryUncheckedUpdateInput>
    /**
     * Choose, which ValidationHistory to update.
     */
    where: ValidationHistoryWhereUniqueInput
  }

  /**
   * ValidationHistory updateMany
   */
  export type ValidationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ValidationHistories.
     */
    data: XOR<ValidationHistoryUpdateManyMutationInput, ValidationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ValidationHistories to update
     */
    where?: ValidationHistoryWhereInput
    /**
     * Limit how many ValidationHistories to update.
     */
    limit?: number
  }

  /**
   * ValidationHistory updateManyAndReturn
   */
  export type ValidationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ValidationHistories.
     */
    data: XOR<ValidationHistoryUpdateManyMutationInput, ValidationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ValidationHistories to update
     */
    where?: ValidationHistoryWhereInput
    /**
     * Limit how many ValidationHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ValidationHistory upsert
   */
  export type ValidationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ValidationHistory to update in case it exists.
     */
    where: ValidationHistoryWhereUniqueInput
    /**
     * In case the ValidationHistory found by the `where` argument doesn't exist, create a new ValidationHistory with this data.
     */
    create: XOR<ValidationHistoryCreateInput, ValidationHistoryUncheckedCreateInput>
    /**
     * In case the ValidationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValidationHistoryUpdateInput, ValidationHistoryUncheckedUpdateInput>
  }

  /**
   * ValidationHistory delete
   */
  export type ValidationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
    /**
     * Filter which ValidationHistory to delete.
     */
    where: ValidationHistoryWhereUniqueInput
  }

  /**
   * ValidationHistory deleteMany
   */
  export type ValidationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValidationHistories to delete
     */
    where?: ValidationHistoryWhereInput
    /**
     * Limit how many ValidationHistories to delete.
     */
    limit?: number
  }

  /**
   * ValidationHistory.code
   */
  export type ValidationHistory$codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    where?: MovieCodeWhereInput
  }

  /**
   * ValidationHistory.platform
   */
  export type ValidationHistory$platformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    where?: RedemptionPlatformWhereInput
  }

  /**
   * ValidationHistory without action
   */
  export type ValidationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValidationHistory
     */
    select?: ValidationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValidationHistory
     */
    omit?: ValidationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ErrorLog
   */

  export type AggregateErrorLog = {
    _count: ErrorLogCountAggregateOutputType | null
    _avg: ErrorLogAvgAggregateOutputType | null
    _sum: ErrorLogSumAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  export type ErrorLogAvgAggregateOutputType = {
    errorId: number | null
    codeId: number | null
    platformId: number | null
  }

  export type ErrorLogSumAggregateOutputType = {
    errorId: number | null
    codeId: number | null
    platformId: number | null
  }

  export type ErrorLogMinAggregateOutputType = {
    errorId: number | null
    codeId: number | null
    errorType: string | null
    errorMessage: string | null
    platformId: number | null
    resolved: boolean | null
  }

  export type ErrorLogMaxAggregateOutputType = {
    errorId: number | null
    codeId: number | null
    errorType: string | null
    errorMessage: string | null
    platformId: number | null
    resolved: boolean | null
  }

  export type ErrorLogCountAggregateOutputType = {
    errorId: number
    codeId: number
    errorType: number
    errorMessage: number
    platformId: number
    resolved: number
    _all: number
  }


  export type ErrorLogAvgAggregateInputType = {
    errorId?: true
    codeId?: true
    platformId?: true
  }

  export type ErrorLogSumAggregateInputType = {
    errorId?: true
    codeId?: true
    platformId?: true
  }

  export type ErrorLogMinAggregateInputType = {
    errorId?: true
    codeId?: true
    errorType?: true
    errorMessage?: true
    platformId?: true
    resolved?: true
  }

  export type ErrorLogMaxAggregateInputType = {
    errorId?: true
    codeId?: true
    errorType?: true
    errorMessage?: true
    platformId?: true
    resolved?: true
  }

  export type ErrorLogCountAggregateInputType = {
    errorId?: true
    codeId?: true
    errorType?: true
    errorMessage?: true
    platformId?: true
    resolved?: true
    _all?: true
  }

  export type ErrorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLog to aggregate.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorLogs
    **/
    _count?: true | ErrorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorLogMaxAggregateInputType
  }

  export type GetErrorLogAggregateType<T extends ErrorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorLog[P]>
      : GetScalarType<T[P], AggregateErrorLog[P]>
  }




  export type ErrorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithAggregationInput | ErrorLogOrderByWithAggregationInput[]
    by: ErrorLogScalarFieldEnum[] | ErrorLogScalarFieldEnum
    having?: ErrorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorLogCountAggregateInputType | true
    _avg?: ErrorLogAvgAggregateInputType
    _sum?: ErrorLogSumAggregateInputType
    _min?: ErrorLogMinAggregateInputType
    _max?: ErrorLogMaxAggregateInputType
  }

  export type ErrorLogGroupByOutputType = {
    errorId: number
    codeId: number | null
    errorType: string
    errorMessage: string | null
    platformId: number | null
    resolved: boolean
    _count: ErrorLogCountAggregateOutputType | null
    _avg: ErrorLogAvgAggregateOutputType | null
    _sum: ErrorLogSumAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  type GetErrorLogGroupByPayload<T extends ErrorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
        }
      >
    >


  export type ErrorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    errorId?: boolean
    codeId?: boolean
    errorType?: boolean
    errorMessage?: boolean
    platformId?: boolean
    resolved?: boolean
    code?: boolean | ErrorLog$codeArgs<ExtArgs>
    platform?: boolean | ErrorLog$platformArgs<ExtArgs>
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    errorId?: boolean
    codeId?: boolean
    errorType?: boolean
    errorMessage?: boolean
    platformId?: boolean
    resolved?: boolean
    code?: boolean | ErrorLog$codeArgs<ExtArgs>
    platform?: boolean | ErrorLog$platformArgs<ExtArgs>
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    errorId?: boolean
    codeId?: boolean
    errorType?: boolean
    errorMessage?: boolean
    platformId?: boolean
    resolved?: boolean
    code?: boolean | ErrorLog$codeArgs<ExtArgs>
    platform?: boolean | ErrorLog$platformArgs<ExtArgs>
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectScalar = {
    errorId?: boolean
    codeId?: boolean
    errorType?: boolean
    errorMessage?: boolean
    platformId?: boolean
    resolved?: boolean
  }

  export type ErrorLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"errorId" | "codeId" | "errorType" | "errorMessage" | "platformId" | "resolved", ExtArgs["result"]["errorLog"]>
  export type ErrorLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | ErrorLog$codeArgs<ExtArgs>
    platform?: boolean | ErrorLog$platformArgs<ExtArgs>
  }
  export type ErrorLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | ErrorLog$codeArgs<ExtArgs>
    platform?: boolean | ErrorLog$platformArgs<ExtArgs>
  }
  export type ErrorLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | ErrorLog$codeArgs<ExtArgs>
    platform?: boolean | ErrorLog$platformArgs<ExtArgs>
  }

  export type $ErrorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorLog"
    objects: {
      code: Prisma.$MovieCodePayload<ExtArgs> | null
      platform: Prisma.$RedemptionPlatformPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      errorId: number
      codeId: number | null
      errorType: string
      errorMessage: string | null
      platformId: number | null
      resolved: boolean
    }, ExtArgs["result"]["errorLog"]>
    composites: {}
  }

  type ErrorLogGetPayload<S extends boolean | null | undefined | ErrorLogDefaultArgs> = $Result.GetResult<Prisma.$ErrorLogPayload, S>

  type ErrorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorLogCountAggregateInputType | true
    }

  export interface ErrorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorLog'], meta: { name: 'ErrorLog' } }
    /**
     * Find zero or one ErrorLog that matches the filter.
     * @param {ErrorLogFindUniqueArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorLogFindUniqueArgs>(args: SelectSubset<T, ErrorLogFindUniqueArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ErrorLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorLogFindUniqueOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorLogFindFirstArgs>(args?: SelectSubset<T, ErrorLogFindFirstArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ErrorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany()
     * 
     * // Get first 10 ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany({ take: 10 })
     * 
     * // Only select the `errorId`
     * const errorLogWithErrorIdOnly = await prisma.errorLog.findMany({ select: { errorId: true } })
     * 
     */
    findMany<T extends ErrorLogFindManyArgs>(args?: SelectSubset<T, ErrorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ErrorLog.
     * @param {ErrorLogCreateArgs} args - Arguments to create a ErrorLog.
     * @example
     * // Create one ErrorLog
     * const ErrorLog = await prisma.errorLog.create({
     *   data: {
     *     // ... data to create a ErrorLog
     *   }
     * })
     * 
     */
    create<T extends ErrorLogCreateArgs>(args: SelectSubset<T, ErrorLogCreateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ErrorLogs.
     * @param {ErrorLogCreateManyArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorLogCreateManyArgs>(args?: SelectSubset<T, ErrorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ErrorLogs and returns the data saved in the database.
     * @param {ErrorLogCreateManyAndReturnArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ErrorLogs and only return the `errorId`
     * const errorLogWithErrorIdOnly = await prisma.errorLog.createManyAndReturn({
     *   select: { errorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErrorLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ErrorLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ErrorLog.
     * @param {ErrorLogDeleteArgs} args - Arguments to delete one ErrorLog.
     * @example
     * // Delete one ErrorLog
     * const ErrorLog = await prisma.errorLog.delete({
     *   where: {
     *     // ... filter to delete one ErrorLog
     *   }
     * })
     * 
     */
    delete<T extends ErrorLogDeleteArgs>(args: SelectSubset<T, ErrorLogDeleteArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ErrorLog.
     * @param {ErrorLogUpdateArgs} args - Arguments to update one ErrorLog.
     * @example
     * // Update one ErrorLog
     * const errorLog = await prisma.errorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorLogUpdateArgs>(args: SelectSubset<T, ErrorLogUpdateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ErrorLogs.
     * @param {ErrorLogDeleteManyArgs} args - Arguments to filter ErrorLogs to delete.
     * @example
     * // Delete a few ErrorLogs
     * const { count } = await prisma.errorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorLogDeleteManyArgs>(args?: SelectSubset<T, ErrorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorLogUpdateManyArgs>(args: SelectSubset<T, ErrorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs and returns the data updated in the database.
     * @param {ErrorLogUpdateManyAndReturnArgs} args - Arguments to update many ErrorLogs.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ErrorLogs and only return the `errorId`
     * const errorLogWithErrorIdOnly = await prisma.errorLog.updateManyAndReturn({
     *   select: { errorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErrorLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ErrorLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ErrorLog.
     * @param {ErrorLogUpsertArgs} args - Arguments to update or create a ErrorLog.
     * @example
     * // Update or create a ErrorLog
     * const errorLog = await prisma.errorLog.upsert({
     *   create: {
     *     // ... data to create a ErrorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorLog we want to update
     *   }
     * })
     */
    upsert<T extends ErrorLogUpsertArgs>(args: SelectSubset<T, ErrorLogUpsertArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogCountArgs} args - Arguments to filter ErrorLogs to count.
     * @example
     * // Count the number of ErrorLogs
     * const count = await prisma.errorLog.count({
     *   where: {
     *     // ... the filter for the ErrorLogs we want to count
     *   }
     * })
    **/
    count<T extends ErrorLogCountArgs>(
      args?: Subset<T, ErrorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorLogAggregateArgs>(args: Subset<T, ErrorLogAggregateArgs>): Prisma.PrismaPromise<GetErrorLogAggregateType<T>>

    /**
     * Group by ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorLogGroupByArgs['orderBy'] }
        : { orderBy?: ErrorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorLog model
   */
  readonly fields: ErrorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    code<T extends ErrorLog$codeArgs<ExtArgs> = {}>(args?: Subset<T, ErrorLog$codeArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    platform<T extends ErrorLog$platformArgs<ExtArgs> = {}>(args?: Subset<T, ErrorLog$platformArgs<ExtArgs>>): Prisma__RedemptionPlatformClient<$Result.GetResult<Prisma.$RedemptionPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ErrorLog model
   */
  interface ErrorLogFieldRefs {
    readonly errorId: FieldRef<"ErrorLog", 'Int'>
    readonly codeId: FieldRef<"ErrorLog", 'Int'>
    readonly errorType: FieldRef<"ErrorLog", 'String'>
    readonly errorMessage: FieldRef<"ErrorLog", 'String'>
    readonly platformId: FieldRef<"ErrorLog", 'Int'>
    readonly resolved: FieldRef<"ErrorLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ErrorLog findUnique
   */
  export type ErrorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findUniqueOrThrow
   */
  export type ErrorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findFirst
   */
  export type ErrorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findFirstOrThrow
   */
  export type ErrorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findMany
   */
  export type ErrorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLogs to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog create
   */
  export type ErrorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ErrorLog.
     */
    data: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
  }

  /**
   * ErrorLog createMany
   */
  export type ErrorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog createManyAndReturn
   */
  export type ErrorLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ErrorLog update
   */
  export type ErrorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ErrorLog.
     */
    data: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
    /**
     * Choose, which ErrorLog to update.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog updateMany
   */
  export type ErrorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
  }

  /**
   * ErrorLog updateManyAndReturn
   */
  export type ErrorLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ErrorLog upsert
   */
  export type ErrorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ErrorLog to update in case it exists.
     */
    where: ErrorLogWhereUniqueInput
    /**
     * In case the ErrorLog found by the `where` argument doesn't exist, create a new ErrorLog with this data.
     */
    create: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
    /**
     * In case the ErrorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
  }

  /**
   * ErrorLog delete
   */
  export type ErrorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter which ErrorLog to delete.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog deleteMany
   */
  export type ErrorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLogs to delete
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to delete.
     */
    limit?: number
  }

  /**
   * ErrorLog.code
   */
  export type ErrorLog$codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCode
     */
    select?: MovieCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCode
     */
    omit?: MovieCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCodeInclude<ExtArgs> | null
    where?: MovieCodeWhereInput
  }

  /**
   * ErrorLog.platform
   */
  export type ErrorLog$platformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedemptionPlatform
     */
    select?: RedemptionPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedemptionPlatform
     */
    omit?: RedemptionPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionPlatformInclude<ExtArgs> | null
    where?: RedemptionPlatformWhereInput
  }

  /**
   * ErrorLog without action
   */
  export type ErrorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
  }


  /**
   * Model RecheckSchedule
   */

  export type AggregateRecheckSchedule = {
    _count: RecheckScheduleCountAggregateOutputType | null
    _avg: RecheckScheduleAvgAggregateOutputType | null
    _sum: RecheckScheduleSumAggregateOutputType | null
    _min: RecheckScheduleMinAggregateOutputType | null
    _max: RecheckScheduleMaxAggregateOutputType | null
  }

  export type RecheckScheduleAvgAggregateOutputType = {
    scheduleId: number | null
    codeId: number | null
  }

  export type RecheckScheduleSumAggregateOutputType = {
    scheduleId: number | null
    codeId: number | null
  }

  export type RecheckScheduleMinAggregateOutputType = {
    scheduleId: number | null
    codeId: number | null
    scheduledDate: Date | null
    priority: $Enums.Priority | null
    completed: boolean | null
  }

  export type RecheckScheduleMaxAggregateOutputType = {
    scheduleId: number | null
    codeId: number | null
    scheduledDate: Date | null
    priority: $Enums.Priority | null
    completed: boolean | null
  }

  export type RecheckScheduleCountAggregateOutputType = {
    scheduleId: number
    codeId: number
    scheduledDate: number
    priority: number
    completed: number
    _all: number
  }


  export type RecheckScheduleAvgAggregateInputType = {
    scheduleId?: true
    codeId?: true
  }

  export type RecheckScheduleSumAggregateInputType = {
    scheduleId?: true
    codeId?: true
  }

  export type RecheckScheduleMinAggregateInputType = {
    scheduleId?: true
    codeId?: true
    scheduledDate?: true
    priority?: true
    completed?: true
  }

  export type RecheckScheduleMaxAggregateInputType = {
    scheduleId?: true
    codeId?: true
    scheduledDate?: true
    priority?: true
    completed?: true
  }

  export type RecheckScheduleCountAggregateInputType = {
    scheduleId?: true
    codeId?: true
    scheduledDate?: true
    priority?: true
    completed?: true
    _all?: true
  }

  export type RecheckScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecheckSchedule to aggregate.
     */
    where?: RecheckScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecheckSchedules to fetch.
     */
    orderBy?: RecheckScheduleOrderByWithRelationInput | RecheckScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecheckScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecheckSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecheckSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecheckSchedules
    **/
    _count?: true | RecheckScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecheckScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecheckScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecheckScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecheckScheduleMaxAggregateInputType
  }

  export type GetRecheckScheduleAggregateType<T extends RecheckScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateRecheckSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecheckSchedule[P]>
      : GetScalarType<T[P], AggregateRecheckSchedule[P]>
  }




  export type RecheckScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecheckScheduleWhereInput
    orderBy?: RecheckScheduleOrderByWithAggregationInput | RecheckScheduleOrderByWithAggregationInput[]
    by: RecheckScheduleScalarFieldEnum[] | RecheckScheduleScalarFieldEnum
    having?: RecheckScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecheckScheduleCountAggregateInputType | true
    _avg?: RecheckScheduleAvgAggregateInputType
    _sum?: RecheckScheduleSumAggregateInputType
    _min?: RecheckScheduleMinAggregateInputType
    _max?: RecheckScheduleMaxAggregateInputType
  }

  export type RecheckScheduleGroupByOutputType = {
    scheduleId: number
    codeId: number
    scheduledDate: Date
    priority: $Enums.Priority
    completed: boolean
    _count: RecheckScheduleCountAggregateOutputType | null
    _avg: RecheckScheduleAvgAggregateOutputType | null
    _sum: RecheckScheduleSumAggregateOutputType | null
    _min: RecheckScheduleMinAggregateOutputType | null
    _max: RecheckScheduleMaxAggregateOutputType | null
  }

  type GetRecheckScheduleGroupByPayload<T extends RecheckScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecheckScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecheckScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecheckScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], RecheckScheduleGroupByOutputType[P]>
        }
      >
    >


  export type RecheckScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    codeId?: boolean
    scheduledDate?: boolean
    priority?: boolean
    completed?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recheckSchedule"]>

  export type RecheckScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    codeId?: boolean
    scheduledDate?: boolean
    priority?: boolean
    completed?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recheckSchedule"]>

  export type RecheckScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    codeId?: boolean
    scheduledDate?: boolean
    priority?: boolean
    completed?: boolean
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recheckSchedule"]>

  export type RecheckScheduleSelectScalar = {
    scheduleId?: boolean
    codeId?: boolean
    scheduledDate?: boolean
    priority?: boolean
    completed?: boolean
  }

  export type RecheckScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduleId" | "codeId" | "scheduledDate" | "priority" | "completed", ExtArgs["result"]["recheckSchedule"]>
  export type RecheckScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
  }
  export type RecheckScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
  }
  export type RecheckScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | MovieCodeDefaultArgs<ExtArgs>
  }

  export type $RecheckSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecheckSchedule"
    objects: {
      code: Prisma.$MovieCodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduleId: number
      codeId: number
      scheduledDate: Date
      priority: $Enums.Priority
      completed: boolean
    }, ExtArgs["result"]["recheckSchedule"]>
    composites: {}
  }

  type RecheckScheduleGetPayload<S extends boolean | null | undefined | RecheckScheduleDefaultArgs> = $Result.GetResult<Prisma.$RecheckSchedulePayload, S>

  type RecheckScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecheckScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecheckScheduleCountAggregateInputType | true
    }

  export interface RecheckScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecheckSchedule'], meta: { name: 'RecheckSchedule' } }
    /**
     * Find zero or one RecheckSchedule that matches the filter.
     * @param {RecheckScheduleFindUniqueArgs} args - Arguments to find a RecheckSchedule
     * @example
     * // Get one RecheckSchedule
     * const recheckSchedule = await prisma.recheckSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecheckScheduleFindUniqueArgs>(args: SelectSubset<T, RecheckScheduleFindUniqueArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecheckSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecheckScheduleFindUniqueOrThrowArgs} args - Arguments to find a RecheckSchedule
     * @example
     * // Get one RecheckSchedule
     * const recheckSchedule = await prisma.recheckSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecheckScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, RecheckScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecheckSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleFindFirstArgs} args - Arguments to find a RecheckSchedule
     * @example
     * // Get one RecheckSchedule
     * const recheckSchedule = await prisma.recheckSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecheckScheduleFindFirstArgs>(args?: SelectSubset<T, RecheckScheduleFindFirstArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecheckSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleFindFirstOrThrowArgs} args - Arguments to find a RecheckSchedule
     * @example
     * // Get one RecheckSchedule
     * const recheckSchedule = await prisma.recheckSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecheckScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, RecheckScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecheckSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecheckSchedules
     * const recheckSchedules = await prisma.recheckSchedule.findMany()
     * 
     * // Get first 10 RecheckSchedules
     * const recheckSchedules = await prisma.recheckSchedule.findMany({ take: 10 })
     * 
     * // Only select the `scheduleId`
     * const recheckScheduleWithScheduleIdOnly = await prisma.recheckSchedule.findMany({ select: { scheduleId: true } })
     * 
     */
    findMany<T extends RecheckScheduleFindManyArgs>(args?: SelectSubset<T, RecheckScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecheckSchedule.
     * @param {RecheckScheduleCreateArgs} args - Arguments to create a RecheckSchedule.
     * @example
     * // Create one RecheckSchedule
     * const RecheckSchedule = await prisma.recheckSchedule.create({
     *   data: {
     *     // ... data to create a RecheckSchedule
     *   }
     * })
     * 
     */
    create<T extends RecheckScheduleCreateArgs>(args: SelectSubset<T, RecheckScheduleCreateArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecheckSchedules.
     * @param {RecheckScheduleCreateManyArgs} args - Arguments to create many RecheckSchedules.
     * @example
     * // Create many RecheckSchedules
     * const recheckSchedule = await prisma.recheckSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecheckScheduleCreateManyArgs>(args?: SelectSubset<T, RecheckScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecheckSchedules and returns the data saved in the database.
     * @param {RecheckScheduleCreateManyAndReturnArgs} args - Arguments to create many RecheckSchedules.
     * @example
     * // Create many RecheckSchedules
     * const recheckSchedule = await prisma.recheckSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecheckSchedules and only return the `scheduleId`
     * const recheckScheduleWithScheduleIdOnly = await prisma.recheckSchedule.createManyAndReturn({
     *   select: { scheduleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecheckScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, RecheckScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecheckSchedule.
     * @param {RecheckScheduleDeleteArgs} args - Arguments to delete one RecheckSchedule.
     * @example
     * // Delete one RecheckSchedule
     * const RecheckSchedule = await prisma.recheckSchedule.delete({
     *   where: {
     *     // ... filter to delete one RecheckSchedule
     *   }
     * })
     * 
     */
    delete<T extends RecheckScheduleDeleteArgs>(args: SelectSubset<T, RecheckScheduleDeleteArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecheckSchedule.
     * @param {RecheckScheduleUpdateArgs} args - Arguments to update one RecheckSchedule.
     * @example
     * // Update one RecheckSchedule
     * const recheckSchedule = await prisma.recheckSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecheckScheduleUpdateArgs>(args: SelectSubset<T, RecheckScheduleUpdateArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecheckSchedules.
     * @param {RecheckScheduleDeleteManyArgs} args - Arguments to filter RecheckSchedules to delete.
     * @example
     * // Delete a few RecheckSchedules
     * const { count } = await prisma.recheckSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecheckScheduleDeleteManyArgs>(args?: SelectSubset<T, RecheckScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecheckSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecheckSchedules
     * const recheckSchedule = await prisma.recheckSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecheckScheduleUpdateManyArgs>(args: SelectSubset<T, RecheckScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecheckSchedules and returns the data updated in the database.
     * @param {RecheckScheduleUpdateManyAndReturnArgs} args - Arguments to update many RecheckSchedules.
     * @example
     * // Update many RecheckSchedules
     * const recheckSchedule = await prisma.recheckSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecheckSchedules and only return the `scheduleId`
     * const recheckScheduleWithScheduleIdOnly = await prisma.recheckSchedule.updateManyAndReturn({
     *   select: { scheduleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecheckScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, RecheckScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecheckSchedule.
     * @param {RecheckScheduleUpsertArgs} args - Arguments to update or create a RecheckSchedule.
     * @example
     * // Update or create a RecheckSchedule
     * const recheckSchedule = await prisma.recheckSchedule.upsert({
     *   create: {
     *     // ... data to create a RecheckSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecheckSchedule we want to update
     *   }
     * })
     */
    upsert<T extends RecheckScheduleUpsertArgs>(args: SelectSubset<T, RecheckScheduleUpsertArgs<ExtArgs>>): Prisma__RecheckScheduleClient<$Result.GetResult<Prisma.$RecheckSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecheckSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleCountArgs} args - Arguments to filter RecheckSchedules to count.
     * @example
     * // Count the number of RecheckSchedules
     * const count = await prisma.recheckSchedule.count({
     *   where: {
     *     // ... the filter for the RecheckSchedules we want to count
     *   }
     * })
    **/
    count<T extends RecheckScheduleCountArgs>(
      args?: Subset<T, RecheckScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecheckScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecheckSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecheckScheduleAggregateArgs>(args: Subset<T, RecheckScheduleAggregateArgs>): Prisma.PrismaPromise<GetRecheckScheduleAggregateType<T>>

    /**
     * Group by RecheckSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecheckScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecheckScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecheckScheduleGroupByArgs['orderBy'] }
        : { orderBy?: RecheckScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecheckScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecheckScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecheckSchedule model
   */
  readonly fields: RecheckScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecheckSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecheckScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    code<T extends MovieCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieCodeDefaultArgs<ExtArgs>>): Prisma__MovieCodeClient<$Result.GetResult<Prisma.$MovieCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecheckSchedule model
   */
  interface RecheckScheduleFieldRefs {
    readonly scheduleId: FieldRef<"RecheckSchedule", 'Int'>
    readonly codeId: FieldRef<"RecheckSchedule", 'Int'>
    readonly scheduledDate: FieldRef<"RecheckSchedule", 'DateTime'>
    readonly priority: FieldRef<"RecheckSchedule", 'Priority'>
    readonly completed: FieldRef<"RecheckSchedule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RecheckSchedule findUnique
   */
  export type RecheckScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RecheckSchedule to fetch.
     */
    where: RecheckScheduleWhereUniqueInput
  }

  /**
   * RecheckSchedule findUniqueOrThrow
   */
  export type RecheckScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RecheckSchedule to fetch.
     */
    where: RecheckScheduleWhereUniqueInput
  }

  /**
   * RecheckSchedule findFirst
   */
  export type RecheckScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RecheckSchedule to fetch.
     */
    where?: RecheckScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecheckSchedules to fetch.
     */
    orderBy?: RecheckScheduleOrderByWithRelationInput | RecheckScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecheckSchedules.
     */
    cursor?: RecheckScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecheckSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecheckSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecheckSchedules.
     */
    distinct?: RecheckScheduleScalarFieldEnum | RecheckScheduleScalarFieldEnum[]
  }

  /**
   * RecheckSchedule findFirstOrThrow
   */
  export type RecheckScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RecheckSchedule to fetch.
     */
    where?: RecheckScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecheckSchedules to fetch.
     */
    orderBy?: RecheckScheduleOrderByWithRelationInput | RecheckScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecheckSchedules.
     */
    cursor?: RecheckScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecheckSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecheckSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecheckSchedules.
     */
    distinct?: RecheckScheduleScalarFieldEnum | RecheckScheduleScalarFieldEnum[]
  }

  /**
   * RecheckSchedule findMany
   */
  export type RecheckScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RecheckSchedules to fetch.
     */
    where?: RecheckScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecheckSchedules to fetch.
     */
    orderBy?: RecheckScheduleOrderByWithRelationInput | RecheckScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecheckSchedules.
     */
    cursor?: RecheckScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecheckSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecheckSchedules.
     */
    skip?: number
    distinct?: RecheckScheduleScalarFieldEnum | RecheckScheduleScalarFieldEnum[]
  }

  /**
   * RecheckSchedule create
   */
  export type RecheckScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a RecheckSchedule.
     */
    data: XOR<RecheckScheduleCreateInput, RecheckScheduleUncheckedCreateInput>
  }

  /**
   * RecheckSchedule createMany
   */
  export type RecheckScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecheckSchedules.
     */
    data: RecheckScheduleCreateManyInput | RecheckScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecheckSchedule createManyAndReturn
   */
  export type RecheckScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many RecheckSchedules.
     */
    data: RecheckScheduleCreateManyInput | RecheckScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecheckSchedule update
   */
  export type RecheckScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a RecheckSchedule.
     */
    data: XOR<RecheckScheduleUpdateInput, RecheckScheduleUncheckedUpdateInput>
    /**
     * Choose, which RecheckSchedule to update.
     */
    where: RecheckScheduleWhereUniqueInput
  }

  /**
   * RecheckSchedule updateMany
   */
  export type RecheckScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecheckSchedules.
     */
    data: XOR<RecheckScheduleUpdateManyMutationInput, RecheckScheduleUncheckedUpdateManyInput>
    /**
     * Filter which RecheckSchedules to update
     */
    where?: RecheckScheduleWhereInput
    /**
     * Limit how many RecheckSchedules to update.
     */
    limit?: number
  }

  /**
   * RecheckSchedule updateManyAndReturn
   */
  export type RecheckScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * The data used to update RecheckSchedules.
     */
    data: XOR<RecheckScheduleUpdateManyMutationInput, RecheckScheduleUncheckedUpdateManyInput>
    /**
     * Filter which RecheckSchedules to update
     */
    where?: RecheckScheduleWhereInput
    /**
     * Limit how many RecheckSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecheckSchedule upsert
   */
  export type RecheckScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the RecheckSchedule to update in case it exists.
     */
    where: RecheckScheduleWhereUniqueInput
    /**
     * In case the RecheckSchedule found by the `where` argument doesn't exist, create a new RecheckSchedule with this data.
     */
    create: XOR<RecheckScheduleCreateInput, RecheckScheduleUncheckedCreateInput>
    /**
     * In case the RecheckSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecheckScheduleUpdateInput, RecheckScheduleUncheckedUpdateInput>
  }

  /**
   * RecheckSchedule delete
   */
  export type RecheckScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
    /**
     * Filter which RecheckSchedule to delete.
     */
    where: RecheckScheduleWhereUniqueInput
  }

  /**
   * RecheckSchedule deleteMany
   */
  export type RecheckScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecheckSchedules to delete
     */
    where?: RecheckScheduleWhereInput
    /**
     * Limit how many RecheckSchedules to delete.
     */
    limit?: number
  }

  /**
   * RecheckSchedule without action
   */
  export type RecheckScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecheckSchedule
     */
    select?: RecheckScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecheckSchedule
     */
    omit?: RecheckScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecheckScheduleInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    historyId: number | null
  }

  export type HistorySumAggregateOutputType = {
    historyId: number | null
  }

  export type HistoryMinAggregateOutputType = {
    historyId: number | null
    title: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    historyId: number | null
    title: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    historyId: number
    title: number
    action: number
    description: number
    createdAt: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    historyId?: true
  }

  export type HistorySumAggregateInputType = {
    historyId?: true
  }

  export type HistoryMinAggregateInputType = {
    historyId?: true
    title?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    historyId?: true
    title?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type HistoryCountAggregateInputType = {
    historyId?: true
    title?: true
    action?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    historyId: number
    title: string
    action: string
    description: string | null
    createdAt: Date
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historyId?: boolean
    title?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historyId?: boolean
    title?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["history"]>

  export type HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historyId?: boolean
    title?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    historyId?: boolean
    title?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"historyId" | "title" | "action" | "description" | "createdAt", ExtArgs["result"]["history"]>

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      historyId: number
      title: string
      action: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `historyId`
     * const historyWithHistoryIdOnly = await prisma.history.findMany({ select: { historyId: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `historyId`
     * const historyWithHistoryIdOnly = await prisma.history.createManyAndReturn({
     *   select: { historyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {HistoryUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `historyId`
     * const historyWithHistoryIdOnly = await prisma.history.updateManyAndReturn({
     *   select: { historyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly historyId: FieldRef<"History", 'Int'>
    readonly title: FieldRef<"History", 'String'>
    readonly action: FieldRef<"History", 'String'>
    readonly description: FieldRef<"History", 'String'>
    readonly createdAt: FieldRef<"History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History updateManyAndReturn
   */
  export type HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorScalarFieldEnum: {
    vendorId: 'vendorId',
    vendorName: 'vendorName',
    contactEmail: 'contactEmail',
    websiteUrl: 'websiteUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const StudioScalarFieldEnum: {
    studioId: 'studioId',
    studioName: 'studioName',
    redemptionBaseUrl: 'redemptionBaseUrl',
    createdAt: 'createdAt'
  };

  export type StudioScalarFieldEnum = (typeof StudioScalarFieldEnum)[keyof typeof StudioScalarFieldEnum]


  export const RedemptionPlatformScalarFieldEnum: {
    platformId: 'platformId',
    platformName: 'platformName',
    platformCode: 'platformCode',
    redemptionUrl: 'redemptionUrl'
  };

  export type RedemptionPlatformScalarFieldEnum = (typeof RedemptionPlatformScalarFieldEnum)[keyof typeof RedemptionPlatformScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    movieId: 'movieId',
    title: 'title',
    releaseYear: 'releaseYear',
    rating: 'rating',
    quality: 'quality',
    runtimeMinutes: 'runtimeMinutes',
    imageUrl: 'imageUrl',
    studioId: 'studioId',
    createdAt: 'createdAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customerId: 'customerId',
    customerName: 'customerName',
    email: 'email',
    phone: 'phone',
    totalPurchases: 'totalPurchases',
    totalSpent: 'totalSpent'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const MovieCodeScalarFieldEnum: {
    codeId: 'codeId',
    code: 'code',
    quality: 'quality',
    status: 'status',
    isBundle: 'isBundle',
    bundleTitle: 'bundleTitle',
    vendorId: 'vendorId',
    studioId: 'studioId',
    purchasePrice: 'purchasePrice',
    sellingPrice: 'sellingPrice',
    redemptionUrl: 'redemptionUrl',
    isVerified: 'isVerified',
    lastVerifiedAt: 'lastVerifiedAt',
    vendorOrderId: 'vendorOrderId'
  };

  export type MovieCodeScalarFieldEnum = (typeof MovieCodeScalarFieldEnum)[keyof typeof MovieCodeScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    saleId: 'saleId',
    codeId: 'codeId',
    customerId: 'customerId',
    saleDate: 'saleDate',
    salePrice: 'salePrice',
    purchaseCost: 'purchaseCost',
    netProfit: 'netProfit'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const CodePlatformAvailabilityScalarFieldEnum: {
    availabilityId: 'availabilityId',
    codeId: 'codeId',
    platformId: 'platformId',
    isValid: 'isValid'
  };

  export type CodePlatformAvailabilityScalarFieldEnum = (typeof CodePlatformAvailabilityScalarFieldEnum)[keyof typeof CodePlatformAvailabilityScalarFieldEnum]


  export const ValidationHistoryScalarFieldEnum: {
    validationId: 'validationId',
    codeId: 'codeId',
    platformId: 'platformId',
    validationDate: 'validationDate',
    isValid: 'isValid',
    validationMethod: 'validationMethod'
  };

  export type ValidationHistoryScalarFieldEnum = (typeof ValidationHistoryScalarFieldEnum)[keyof typeof ValidationHistoryScalarFieldEnum]


  export const ErrorLogScalarFieldEnum: {
    errorId: 'errorId',
    codeId: 'codeId',
    errorType: 'errorType',
    errorMessage: 'errorMessage',
    platformId: 'platformId',
    resolved: 'resolved'
  };

  export type ErrorLogScalarFieldEnum = (typeof ErrorLogScalarFieldEnum)[keyof typeof ErrorLogScalarFieldEnum]


  export const RecheckScheduleScalarFieldEnum: {
    scheduleId: 'scheduleId',
    codeId: 'codeId',
    scheduledDate: 'scheduledDate',
    priority: 'priority',
    completed: 'completed'
  };

  export type RecheckScheduleScalarFieldEnum = (typeof RecheckScheduleScalarFieldEnum)[keyof typeof RecheckScheduleScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    historyId: 'historyId',
    title: 'title',
    action: 'action',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Quality'
   */
  export type EnumQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Quality'>
    


  /**
   * Reference to a field of type 'Quality[]'
   */
  export type ListEnumQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Quality[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CodeStatus'
   */
  export type EnumCodeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeStatus'>
    


  /**
   * Reference to a field of type 'CodeStatus[]'
   */
  export type ListEnumCodeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    vendorId?: IntFilter<"Vendor"> | number
    vendorName?: StringFilter<"Vendor"> | string
    contactEmail?: StringNullableFilter<"Vendor"> | string | null
    websiteUrl?: StringNullableFilter<"Vendor"> | string | null
    isActive?: BoolFilter<"Vendor"> | boolean
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    movieCodes?: MovieCodeListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    vendorId?: SortOrder
    vendorName?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    movieCodes?: MovieCodeOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    vendorId?: number
    vendorName?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    contactEmail?: StringNullableFilter<"Vendor"> | string | null
    websiteUrl?: StringNullableFilter<"Vendor"> | string | null
    isActive?: BoolFilter<"Vendor"> | boolean
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    movieCodes?: MovieCodeListRelationFilter
  }, "vendorId" | "vendorName">

  export type VendorOrderByWithAggregationInput = {
    vendorId?: SortOrder
    vendorName?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    vendorId?: IntWithAggregatesFilter<"Vendor"> | number
    vendorName?: StringWithAggregatesFilter<"Vendor"> | string
    contactEmail?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    isActive?: BoolWithAggregatesFilter<"Vendor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type StudioWhereInput = {
    AND?: StudioWhereInput | StudioWhereInput[]
    OR?: StudioWhereInput[]
    NOT?: StudioWhereInput | StudioWhereInput[]
    studioId?: IntFilter<"Studio"> | number
    studioName?: StringFilter<"Studio"> | string
    redemptionBaseUrl?: StringNullableFilter<"Studio"> | string | null
    createdAt?: DateTimeFilter<"Studio"> | Date | string
    movies?: MovieListRelationFilter
    movieCodes?: MovieCodeListRelationFilter
  }

  export type StudioOrderByWithRelationInput = {
    studioId?: SortOrder
    studioName?: SortOrder
    redemptionBaseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    movieCodes?: MovieCodeOrderByRelationAggregateInput
  }

  export type StudioWhereUniqueInput = Prisma.AtLeast<{
    studioId?: number
    studioName?: string
    AND?: StudioWhereInput | StudioWhereInput[]
    OR?: StudioWhereInput[]
    NOT?: StudioWhereInput | StudioWhereInput[]
    redemptionBaseUrl?: StringNullableFilter<"Studio"> | string | null
    createdAt?: DateTimeFilter<"Studio"> | Date | string
    movies?: MovieListRelationFilter
    movieCodes?: MovieCodeListRelationFilter
  }, "studioId" | "studioName">

  export type StudioOrderByWithAggregationInput = {
    studioId?: SortOrder
    studioName?: SortOrder
    redemptionBaseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudioCountOrderByAggregateInput
    _avg?: StudioAvgOrderByAggregateInput
    _max?: StudioMaxOrderByAggregateInput
    _min?: StudioMinOrderByAggregateInput
    _sum?: StudioSumOrderByAggregateInput
  }

  export type StudioScalarWhereWithAggregatesInput = {
    AND?: StudioScalarWhereWithAggregatesInput | StudioScalarWhereWithAggregatesInput[]
    OR?: StudioScalarWhereWithAggregatesInput[]
    NOT?: StudioScalarWhereWithAggregatesInput | StudioScalarWhereWithAggregatesInput[]
    studioId?: IntWithAggregatesFilter<"Studio"> | number
    studioName?: StringWithAggregatesFilter<"Studio"> | string
    redemptionBaseUrl?: StringNullableWithAggregatesFilter<"Studio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Studio"> | Date | string
  }

  export type RedemptionPlatformWhereInput = {
    AND?: RedemptionPlatformWhereInput | RedemptionPlatformWhereInput[]
    OR?: RedemptionPlatformWhereInput[]
    NOT?: RedemptionPlatformWhereInput | RedemptionPlatformWhereInput[]
    platformId?: IntFilter<"RedemptionPlatform"> | number
    platformName?: StringFilter<"RedemptionPlatform"> | string
    platformCode?: StringFilter<"RedemptionPlatform"> | string
    redemptionUrl?: StringNullableFilter<"RedemptionPlatform"> | string | null
    availabilities?: CodePlatformAvailabilityListRelationFilter
    validationHistory?: ValidationHistoryListRelationFilter
    errorLogs?: ErrorLogListRelationFilter
  }

  export type RedemptionPlatformOrderByWithRelationInput = {
    platformId?: SortOrder
    platformName?: SortOrder
    platformCode?: SortOrder
    redemptionUrl?: SortOrderInput | SortOrder
    availabilities?: CodePlatformAvailabilityOrderByRelationAggregateInput
    validationHistory?: ValidationHistoryOrderByRelationAggregateInput
    errorLogs?: ErrorLogOrderByRelationAggregateInput
  }

  export type RedemptionPlatformWhereUniqueInput = Prisma.AtLeast<{
    platformId?: number
    platformName?: string
    platformCode?: string
    AND?: RedemptionPlatformWhereInput | RedemptionPlatformWhereInput[]
    OR?: RedemptionPlatformWhereInput[]
    NOT?: RedemptionPlatformWhereInput | RedemptionPlatformWhereInput[]
    redemptionUrl?: StringNullableFilter<"RedemptionPlatform"> | string | null
    availabilities?: CodePlatformAvailabilityListRelationFilter
    validationHistory?: ValidationHistoryListRelationFilter
    errorLogs?: ErrorLogListRelationFilter
  }, "platformId" | "platformName" | "platformCode">

  export type RedemptionPlatformOrderByWithAggregationInput = {
    platformId?: SortOrder
    platformName?: SortOrder
    platformCode?: SortOrder
    redemptionUrl?: SortOrderInput | SortOrder
    _count?: RedemptionPlatformCountOrderByAggregateInput
    _avg?: RedemptionPlatformAvgOrderByAggregateInput
    _max?: RedemptionPlatformMaxOrderByAggregateInput
    _min?: RedemptionPlatformMinOrderByAggregateInput
    _sum?: RedemptionPlatformSumOrderByAggregateInput
  }

  export type RedemptionPlatformScalarWhereWithAggregatesInput = {
    AND?: RedemptionPlatformScalarWhereWithAggregatesInput | RedemptionPlatformScalarWhereWithAggregatesInput[]
    OR?: RedemptionPlatformScalarWhereWithAggregatesInput[]
    NOT?: RedemptionPlatformScalarWhereWithAggregatesInput | RedemptionPlatformScalarWhereWithAggregatesInput[]
    platformId?: IntWithAggregatesFilter<"RedemptionPlatform"> | number
    platformName?: StringWithAggregatesFilter<"RedemptionPlatform"> | string
    platformCode?: StringWithAggregatesFilter<"RedemptionPlatform"> | string
    redemptionUrl?: StringNullableWithAggregatesFilter<"RedemptionPlatform"> | string | null
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    movieId?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    releaseYear?: IntNullableFilter<"Movie"> | number | null
    rating?: StringNullableFilter<"Movie"> | string | null
    quality?: EnumQualityNullableFilter<"Movie"> | $Enums.Quality | null
    runtimeMinutes?: IntNullableFilter<"Movie"> | number | null
    imageUrl?: StringNullableFilter<"Movie"> | string | null
    studioId?: IntNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    studio?: XOR<StudioNullableScalarRelationFilter, StudioWhereInput> | null
    movieCodes?: MovieCodeListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    movieId?: SortOrder
    title?: SortOrder
    releaseYear?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    quality?: SortOrderInput | SortOrder
    runtimeMinutes?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    studioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studio?: StudioOrderByWithRelationInput
    movieCodes?: MovieCodeOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    movieId?: number
    title_releaseYear?: MovieTitleReleaseYearCompoundUniqueInput
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    releaseYear?: IntNullableFilter<"Movie"> | number | null
    rating?: StringNullableFilter<"Movie"> | string | null
    quality?: EnumQualityNullableFilter<"Movie"> | $Enums.Quality | null
    runtimeMinutes?: IntNullableFilter<"Movie"> | number | null
    imageUrl?: StringNullableFilter<"Movie"> | string | null
    studioId?: IntNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    studio?: XOR<StudioNullableScalarRelationFilter, StudioWhereInput> | null
    movieCodes?: MovieCodeListRelationFilter
  }, "movieId" | "title_releaseYear">

  export type MovieOrderByWithAggregationInput = {
    movieId?: SortOrder
    title?: SortOrder
    releaseYear?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    quality?: SortOrderInput | SortOrder
    runtimeMinutes?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    studioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    movieId?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    releaseYear?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    rating?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    quality?: EnumQualityNullableWithAggregatesFilter<"Movie"> | $Enums.Quality | null
    runtimeMinutes?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    studioId?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: IntFilter<"Customer"> | number
    customerName?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    totalPurchases?: IntFilter<"Customer"> | number
    totalSpent?: DecimalFilter<"Customer"> | Decimal | DecimalJsLike | number | string
    sales?: SaleListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerName?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    totalPurchases?: IntFilter<"Customer"> | number
    totalSpent?: DecimalFilter<"Customer"> | Decimal | DecimalJsLike | number | string
    sales?: SaleListRelationFilter
  }, "customerId" | "email">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    customerName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customer"> | number
    customerName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    totalPurchases?: IntWithAggregatesFilter<"Customer"> | number
    totalSpent?: DecimalWithAggregatesFilter<"Customer"> | Decimal | DecimalJsLike | number | string
  }

  export type MovieCodeWhereInput = {
    AND?: MovieCodeWhereInput | MovieCodeWhereInput[]
    OR?: MovieCodeWhereInput[]
    NOT?: MovieCodeWhereInput | MovieCodeWhereInput[]
    codeId?: IntFilter<"MovieCode"> | number
    code?: StringFilter<"MovieCode"> | string
    quality?: EnumQualityFilter<"MovieCode"> | $Enums.Quality
    status?: EnumCodeStatusFilter<"MovieCode"> | $Enums.CodeStatus
    isBundle?: BoolFilter<"MovieCode"> | boolean
    bundleTitle?: StringNullableFilter<"MovieCode"> | string | null
    vendorId?: IntFilter<"MovieCode"> | number
    studioId?: IntNullableFilter<"MovieCode"> | number | null
    purchasePrice?: DecimalNullableFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: DecimalNullableFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: StringNullableFilter<"MovieCode"> | string | null
    isVerified?: BoolFilter<"MovieCode"> | boolean
    lastVerifiedAt?: DateTimeNullableFilter<"MovieCode"> | Date | string | null
    vendorOrderId?: StringNullableFilter<"MovieCode"> | string | null
    movies?: MovieListRelationFilter
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    studio?: XOR<StudioNullableScalarRelationFilter, StudioWhereInput> | null
    sales?: XOR<SaleNullableScalarRelationFilter, SaleWhereInput> | null
    availabilities?: CodePlatformAvailabilityListRelationFilter
    validationHistory?: ValidationHistoryListRelationFilter
    errorLogs?: ErrorLogListRelationFilter
    recheckSchedules?: RecheckScheduleListRelationFilter
  }

  export type MovieCodeOrderByWithRelationInput = {
    codeId?: SortOrder
    code?: SortOrder
    quality?: SortOrder
    status?: SortOrder
    isBundle?: SortOrder
    bundleTitle?: SortOrderInput | SortOrder
    vendorId?: SortOrder
    studioId?: SortOrderInput | SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    sellingPrice?: SortOrderInput | SortOrder
    redemptionUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    vendorOrderId?: SortOrderInput | SortOrder
    movies?: MovieOrderByRelationAggregateInput
    vendor?: VendorOrderByWithRelationInput
    studio?: StudioOrderByWithRelationInput
    sales?: SaleOrderByWithRelationInput
    availabilities?: CodePlatformAvailabilityOrderByRelationAggregateInput
    validationHistory?: ValidationHistoryOrderByRelationAggregateInput
    errorLogs?: ErrorLogOrderByRelationAggregateInput
    recheckSchedules?: RecheckScheduleOrderByRelationAggregateInput
  }

  export type MovieCodeWhereUniqueInput = Prisma.AtLeast<{
    codeId?: number
    code?: string
    AND?: MovieCodeWhereInput | MovieCodeWhereInput[]
    OR?: MovieCodeWhereInput[]
    NOT?: MovieCodeWhereInput | MovieCodeWhereInput[]
    quality?: EnumQualityFilter<"MovieCode"> | $Enums.Quality
    status?: EnumCodeStatusFilter<"MovieCode"> | $Enums.CodeStatus
    isBundle?: BoolFilter<"MovieCode"> | boolean
    bundleTitle?: StringNullableFilter<"MovieCode"> | string | null
    vendorId?: IntFilter<"MovieCode"> | number
    studioId?: IntNullableFilter<"MovieCode"> | number | null
    purchasePrice?: DecimalNullableFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: DecimalNullableFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: StringNullableFilter<"MovieCode"> | string | null
    isVerified?: BoolFilter<"MovieCode"> | boolean
    lastVerifiedAt?: DateTimeNullableFilter<"MovieCode"> | Date | string | null
    vendorOrderId?: StringNullableFilter<"MovieCode"> | string | null
    movies?: MovieListRelationFilter
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    studio?: XOR<StudioNullableScalarRelationFilter, StudioWhereInput> | null
    sales?: XOR<SaleNullableScalarRelationFilter, SaleWhereInput> | null
    availabilities?: CodePlatformAvailabilityListRelationFilter
    validationHistory?: ValidationHistoryListRelationFilter
    errorLogs?: ErrorLogListRelationFilter
    recheckSchedules?: RecheckScheduleListRelationFilter
  }, "codeId" | "code">

  export type MovieCodeOrderByWithAggregationInput = {
    codeId?: SortOrder
    code?: SortOrder
    quality?: SortOrder
    status?: SortOrder
    isBundle?: SortOrder
    bundleTitle?: SortOrderInput | SortOrder
    vendorId?: SortOrder
    studioId?: SortOrderInput | SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    sellingPrice?: SortOrderInput | SortOrder
    redemptionUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    vendorOrderId?: SortOrderInput | SortOrder
    _count?: MovieCodeCountOrderByAggregateInput
    _avg?: MovieCodeAvgOrderByAggregateInput
    _max?: MovieCodeMaxOrderByAggregateInput
    _min?: MovieCodeMinOrderByAggregateInput
    _sum?: MovieCodeSumOrderByAggregateInput
  }

  export type MovieCodeScalarWhereWithAggregatesInput = {
    AND?: MovieCodeScalarWhereWithAggregatesInput | MovieCodeScalarWhereWithAggregatesInput[]
    OR?: MovieCodeScalarWhereWithAggregatesInput[]
    NOT?: MovieCodeScalarWhereWithAggregatesInput | MovieCodeScalarWhereWithAggregatesInput[]
    codeId?: IntWithAggregatesFilter<"MovieCode"> | number
    code?: StringWithAggregatesFilter<"MovieCode"> | string
    quality?: EnumQualityWithAggregatesFilter<"MovieCode"> | $Enums.Quality
    status?: EnumCodeStatusWithAggregatesFilter<"MovieCode"> | $Enums.CodeStatus
    isBundle?: BoolWithAggregatesFilter<"MovieCode"> | boolean
    bundleTitle?: StringNullableWithAggregatesFilter<"MovieCode"> | string | null
    vendorId?: IntWithAggregatesFilter<"MovieCode"> | number
    studioId?: IntNullableWithAggregatesFilter<"MovieCode"> | number | null
    purchasePrice?: DecimalNullableWithAggregatesFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: DecimalNullableWithAggregatesFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: StringNullableWithAggregatesFilter<"MovieCode"> | string | null
    isVerified?: BoolWithAggregatesFilter<"MovieCode"> | boolean
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter<"MovieCode"> | Date | string | null
    vendorOrderId?: StringNullableWithAggregatesFilter<"MovieCode"> | string | null
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    saleId?: IntFilter<"Sale"> | number
    codeId?: IntFilter<"Sale"> | number
    customerId?: IntNullableFilter<"Sale"> | number | null
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    salePrice?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalNullableFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    code?: XOR<MovieCodeScalarRelationFilter, MovieCodeWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type SaleOrderByWithRelationInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    saleDate?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrderInput | SortOrder
    netProfit?: SortOrder
    code?: MovieCodeOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    saleId?: number
    codeId?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    customerId?: IntNullableFilter<"Sale"> | number | null
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    salePrice?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalNullableFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    code?: XOR<MovieCodeScalarRelationFilter, MovieCodeWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "saleId" | "codeId">

  export type SaleOrderByWithAggregationInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    saleDate?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrderInput | SortOrder
    netProfit?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    saleId?: IntWithAggregatesFilter<"Sale"> | number
    codeId?: IntWithAggregatesFilter<"Sale"> | number
    customerId?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    saleDate?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    salePrice?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalNullableWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
  }

  export type CodePlatformAvailabilityWhereInput = {
    AND?: CodePlatformAvailabilityWhereInput | CodePlatformAvailabilityWhereInput[]
    OR?: CodePlatformAvailabilityWhereInput[]
    NOT?: CodePlatformAvailabilityWhereInput | CodePlatformAvailabilityWhereInput[]
    availabilityId?: IntFilter<"CodePlatformAvailability"> | number
    codeId?: IntFilter<"CodePlatformAvailability"> | number
    platformId?: IntFilter<"CodePlatformAvailability"> | number
    isValid?: BoolFilter<"CodePlatformAvailability"> | boolean
    code?: XOR<MovieCodeScalarRelationFilter, MovieCodeWhereInput>
    platform?: XOR<RedemptionPlatformScalarRelationFilter, RedemptionPlatformWhereInput>
  }

  export type CodePlatformAvailabilityOrderByWithRelationInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    isValid?: SortOrder
    code?: MovieCodeOrderByWithRelationInput
    platform?: RedemptionPlatformOrderByWithRelationInput
  }

  export type CodePlatformAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    availabilityId?: number
    codeId_platformId?: CodePlatformAvailabilityCodeIdPlatformIdCompoundUniqueInput
    AND?: CodePlatformAvailabilityWhereInput | CodePlatformAvailabilityWhereInput[]
    OR?: CodePlatformAvailabilityWhereInput[]
    NOT?: CodePlatformAvailabilityWhereInput | CodePlatformAvailabilityWhereInput[]
    codeId?: IntFilter<"CodePlatformAvailability"> | number
    platformId?: IntFilter<"CodePlatformAvailability"> | number
    isValid?: BoolFilter<"CodePlatformAvailability"> | boolean
    code?: XOR<MovieCodeScalarRelationFilter, MovieCodeWhereInput>
    platform?: XOR<RedemptionPlatformScalarRelationFilter, RedemptionPlatformWhereInput>
  }, "availabilityId" | "codeId_platformId">

  export type CodePlatformAvailabilityOrderByWithAggregationInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    isValid?: SortOrder
    _count?: CodePlatformAvailabilityCountOrderByAggregateInput
    _avg?: CodePlatformAvailabilityAvgOrderByAggregateInput
    _max?: CodePlatformAvailabilityMaxOrderByAggregateInput
    _min?: CodePlatformAvailabilityMinOrderByAggregateInput
    _sum?: CodePlatformAvailabilitySumOrderByAggregateInput
  }

  export type CodePlatformAvailabilityScalarWhereWithAggregatesInput = {
    AND?: CodePlatformAvailabilityScalarWhereWithAggregatesInput | CodePlatformAvailabilityScalarWhereWithAggregatesInput[]
    OR?: CodePlatformAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: CodePlatformAvailabilityScalarWhereWithAggregatesInput | CodePlatformAvailabilityScalarWhereWithAggregatesInput[]
    availabilityId?: IntWithAggregatesFilter<"CodePlatformAvailability"> | number
    codeId?: IntWithAggregatesFilter<"CodePlatformAvailability"> | number
    platformId?: IntWithAggregatesFilter<"CodePlatformAvailability"> | number
    isValid?: BoolWithAggregatesFilter<"CodePlatformAvailability"> | boolean
  }

  export type ValidationHistoryWhereInput = {
    AND?: ValidationHistoryWhereInput | ValidationHistoryWhereInput[]
    OR?: ValidationHistoryWhereInput[]
    NOT?: ValidationHistoryWhereInput | ValidationHistoryWhereInput[]
    validationId?: IntFilter<"ValidationHistory"> | number
    codeId?: IntFilter<"ValidationHistory"> | number
    platformId?: IntNullableFilter<"ValidationHistory"> | number | null
    validationDate?: DateTimeFilter<"ValidationHistory"> | Date | string
    isValid?: BoolFilter<"ValidationHistory"> | boolean
    validationMethod?: StringNullableFilter<"ValidationHistory"> | string | null
    code?: XOR<MovieCodeNullableScalarRelationFilter, MovieCodeWhereInput> | null
    platform?: XOR<RedemptionPlatformNullableScalarRelationFilter, RedemptionPlatformWhereInput> | null
  }

  export type ValidationHistoryOrderByWithRelationInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrderInput | SortOrder
    validationDate?: SortOrder
    isValid?: SortOrder
    validationMethod?: SortOrderInput | SortOrder
    code?: MovieCodeOrderByWithRelationInput
    platform?: RedemptionPlatformOrderByWithRelationInput
  }

  export type ValidationHistoryWhereUniqueInput = Prisma.AtLeast<{
    validationId?: number
    AND?: ValidationHistoryWhereInput | ValidationHistoryWhereInput[]
    OR?: ValidationHistoryWhereInput[]
    NOT?: ValidationHistoryWhereInput | ValidationHistoryWhereInput[]
    codeId?: IntFilter<"ValidationHistory"> | number
    platformId?: IntNullableFilter<"ValidationHistory"> | number | null
    validationDate?: DateTimeFilter<"ValidationHistory"> | Date | string
    isValid?: BoolFilter<"ValidationHistory"> | boolean
    validationMethod?: StringNullableFilter<"ValidationHistory"> | string | null
    code?: XOR<MovieCodeNullableScalarRelationFilter, MovieCodeWhereInput> | null
    platform?: XOR<RedemptionPlatformNullableScalarRelationFilter, RedemptionPlatformWhereInput> | null
  }, "validationId">

  export type ValidationHistoryOrderByWithAggregationInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrderInput | SortOrder
    validationDate?: SortOrder
    isValid?: SortOrder
    validationMethod?: SortOrderInput | SortOrder
    _count?: ValidationHistoryCountOrderByAggregateInput
    _avg?: ValidationHistoryAvgOrderByAggregateInput
    _max?: ValidationHistoryMaxOrderByAggregateInput
    _min?: ValidationHistoryMinOrderByAggregateInput
    _sum?: ValidationHistorySumOrderByAggregateInput
  }

  export type ValidationHistoryScalarWhereWithAggregatesInput = {
    AND?: ValidationHistoryScalarWhereWithAggregatesInput | ValidationHistoryScalarWhereWithAggregatesInput[]
    OR?: ValidationHistoryScalarWhereWithAggregatesInput[]
    NOT?: ValidationHistoryScalarWhereWithAggregatesInput | ValidationHistoryScalarWhereWithAggregatesInput[]
    validationId?: IntWithAggregatesFilter<"ValidationHistory"> | number
    codeId?: IntWithAggregatesFilter<"ValidationHistory"> | number
    platformId?: IntNullableWithAggregatesFilter<"ValidationHistory"> | number | null
    validationDate?: DateTimeWithAggregatesFilter<"ValidationHistory"> | Date | string
    isValid?: BoolWithAggregatesFilter<"ValidationHistory"> | boolean
    validationMethod?: StringNullableWithAggregatesFilter<"ValidationHistory"> | string | null
  }

  export type ErrorLogWhereInput = {
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    errorId?: IntFilter<"ErrorLog"> | number
    codeId?: IntNullableFilter<"ErrorLog"> | number | null
    errorType?: StringFilter<"ErrorLog"> | string
    errorMessage?: StringNullableFilter<"ErrorLog"> | string | null
    platformId?: IntNullableFilter<"ErrorLog"> | number | null
    resolved?: BoolFilter<"ErrorLog"> | boolean
    code?: XOR<MovieCodeNullableScalarRelationFilter, MovieCodeWhereInput> | null
    platform?: XOR<RedemptionPlatformNullableScalarRelationFilter, RedemptionPlatformWhereInput> | null
  }

  export type ErrorLogOrderByWithRelationInput = {
    errorId?: SortOrder
    codeId?: SortOrderInput | SortOrder
    errorType?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    platformId?: SortOrderInput | SortOrder
    resolved?: SortOrder
    code?: MovieCodeOrderByWithRelationInput
    platform?: RedemptionPlatformOrderByWithRelationInput
  }

  export type ErrorLogWhereUniqueInput = Prisma.AtLeast<{
    errorId?: number
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    codeId?: IntNullableFilter<"ErrorLog"> | number | null
    errorType?: StringFilter<"ErrorLog"> | string
    errorMessage?: StringNullableFilter<"ErrorLog"> | string | null
    platformId?: IntNullableFilter<"ErrorLog"> | number | null
    resolved?: BoolFilter<"ErrorLog"> | boolean
    code?: XOR<MovieCodeNullableScalarRelationFilter, MovieCodeWhereInput> | null
    platform?: XOR<RedemptionPlatformNullableScalarRelationFilter, RedemptionPlatformWhereInput> | null
  }, "errorId">

  export type ErrorLogOrderByWithAggregationInput = {
    errorId?: SortOrder
    codeId?: SortOrderInput | SortOrder
    errorType?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    platformId?: SortOrderInput | SortOrder
    resolved?: SortOrder
    _count?: ErrorLogCountOrderByAggregateInput
    _avg?: ErrorLogAvgOrderByAggregateInput
    _max?: ErrorLogMaxOrderByAggregateInput
    _min?: ErrorLogMinOrderByAggregateInput
    _sum?: ErrorLogSumOrderByAggregateInput
  }

  export type ErrorLogScalarWhereWithAggregatesInput = {
    AND?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    OR?: ErrorLogScalarWhereWithAggregatesInput[]
    NOT?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    errorId?: IntWithAggregatesFilter<"ErrorLog"> | number
    codeId?: IntNullableWithAggregatesFilter<"ErrorLog"> | number | null
    errorType?: StringWithAggregatesFilter<"ErrorLog"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    platformId?: IntNullableWithAggregatesFilter<"ErrorLog"> | number | null
    resolved?: BoolWithAggregatesFilter<"ErrorLog"> | boolean
  }

  export type RecheckScheduleWhereInput = {
    AND?: RecheckScheduleWhereInput | RecheckScheduleWhereInput[]
    OR?: RecheckScheduleWhereInput[]
    NOT?: RecheckScheduleWhereInput | RecheckScheduleWhereInput[]
    scheduleId?: IntFilter<"RecheckSchedule"> | number
    codeId?: IntFilter<"RecheckSchedule"> | number
    scheduledDate?: DateTimeFilter<"RecheckSchedule"> | Date | string
    priority?: EnumPriorityFilter<"RecheckSchedule"> | $Enums.Priority
    completed?: BoolFilter<"RecheckSchedule"> | boolean
    code?: XOR<MovieCodeScalarRelationFilter, MovieCodeWhereInput>
  }

  export type RecheckScheduleOrderByWithRelationInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
    scheduledDate?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    code?: MovieCodeOrderByWithRelationInput
  }

  export type RecheckScheduleWhereUniqueInput = Prisma.AtLeast<{
    scheduleId?: number
    AND?: RecheckScheduleWhereInput | RecheckScheduleWhereInput[]
    OR?: RecheckScheduleWhereInput[]
    NOT?: RecheckScheduleWhereInput | RecheckScheduleWhereInput[]
    codeId?: IntFilter<"RecheckSchedule"> | number
    scheduledDate?: DateTimeFilter<"RecheckSchedule"> | Date | string
    priority?: EnumPriorityFilter<"RecheckSchedule"> | $Enums.Priority
    completed?: BoolFilter<"RecheckSchedule"> | boolean
    code?: XOR<MovieCodeScalarRelationFilter, MovieCodeWhereInput>
  }, "scheduleId">

  export type RecheckScheduleOrderByWithAggregationInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
    scheduledDate?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    _count?: RecheckScheduleCountOrderByAggregateInput
    _avg?: RecheckScheduleAvgOrderByAggregateInput
    _max?: RecheckScheduleMaxOrderByAggregateInput
    _min?: RecheckScheduleMinOrderByAggregateInput
    _sum?: RecheckScheduleSumOrderByAggregateInput
  }

  export type RecheckScheduleScalarWhereWithAggregatesInput = {
    AND?: RecheckScheduleScalarWhereWithAggregatesInput | RecheckScheduleScalarWhereWithAggregatesInput[]
    OR?: RecheckScheduleScalarWhereWithAggregatesInput[]
    NOT?: RecheckScheduleScalarWhereWithAggregatesInput | RecheckScheduleScalarWhereWithAggregatesInput[]
    scheduleId?: IntWithAggregatesFilter<"RecheckSchedule"> | number
    codeId?: IntWithAggregatesFilter<"RecheckSchedule"> | number
    scheduledDate?: DateTimeWithAggregatesFilter<"RecheckSchedule"> | Date | string
    priority?: EnumPriorityWithAggregatesFilter<"RecheckSchedule"> | $Enums.Priority
    completed?: BoolWithAggregatesFilter<"RecheckSchedule"> | boolean
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    historyId?: IntFilter<"History"> | number
    title?: StringFilter<"History"> | string
    action?: StringFilter<"History"> | string
    description?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
  }

  export type HistoryOrderByWithRelationInput = {
    historyId?: SortOrder
    title?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    historyId?: number
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    title?: StringFilter<"History"> | string
    action?: StringFilter<"History"> | string
    description?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
  }, "historyId">

  export type HistoryOrderByWithAggregationInput = {
    historyId?: SortOrder
    title?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    historyId?: IntWithAggregatesFilter<"History"> | number
    title?: StringWithAggregatesFilter<"History"> | string
    action?: StringWithAggregatesFilter<"History"> | string
    description?: StringNullableWithAggregatesFilter<"History"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
  }

  export type VendorCreateInput = {
    vendorName: string
    contactEmail?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    movieCodes?: MovieCodeCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    vendorId?: number
    vendorName: string
    contactEmail?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    movieCodes?: MovieCodeUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    vendorId?: number
    vendorName: string
    contactEmail?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioCreateInput = {
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
    movies?: MovieCreateNestedManyWithoutStudioInput
    movieCodes?: MovieCodeCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateInput = {
    studioId?: number
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutStudioInput
    movieCodes?: MovieCodeUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioUpdateInput = {
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutStudioNestedInput
    movieCodes?: MovieCodeUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutStudioNestedInput
    movieCodes?: MovieCodeUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type StudioCreateManyInput = {
    studioId?: number
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
  }

  export type StudioUpdateManyMutationInput = {
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUncheckedUpdateManyInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionPlatformCreateInput = {
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutPlatformInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutPlatformInput
    errorLogs?: ErrorLogCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformUncheckedCreateInput = {
    platformId?: number
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutPlatformInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutPlatformInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformUpdateInput = {
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutPlatformNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutPlatformNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutPlatformNestedInput
  }

  export type RedemptionPlatformUncheckedUpdateInput = {
    platformId?: IntFieldUpdateOperationsInput | number
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutPlatformNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutPlatformNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type RedemptionPlatformCreateManyInput = {
    platformId?: number
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
  }

  export type RedemptionPlatformUpdateManyMutationInput = {
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionPlatformUncheckedUpdateManyInput = {
    platformId?: IntFieldUpdateOperationsInput | number
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieCreateInput = {
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    studio?: StudioCreateNestedOneWithoutMoviesInput
    movieCodes?: MovieCodeCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    movieId?: number
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    studioId?: number | null
    createdAt?: Date | string
    movieCodes?: MovieCodeUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studio?: StudioUpdateOneWithoutMoviesNestedInput
    movieCodes?: MovieCodeUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieCreateManyInput = {
    movieId?: number
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    studioId?: number | null
    createdAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    customerName?: string | null
    email?: string | null
    phone?: string | null
    totalPurchases?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: number
    customerName?: string | null
    email?: string | null
    phone?: string | null
    totalPurchases?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customerId?: number
    customerName?: string | null
    email?: string | null
    phone?: string | null
    totalPurchases?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerUpdateManyMutationInput = {
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MovieCodeCreateInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeCreateManyInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
  }

  export type MovieCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieCodeUncheckedUpdateManyInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleCreateInput = {
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
    code: MovieCodeCreateNestedOneWithoutSalesInput
    customer?: CustomerCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    saleId?: number
    codeId: number
    customerId?: number | null
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
  }

  export type SaleUpdateInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: MovieCodeUpdateOneRequiredWithoutSalesNestedInput
    customer?: CustomerUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleCreateManyInput = {
    saleId?: number
    codeId: number
    customerId?: number | null
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
  }

  export type SaleUpdateManyMutationInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleUncheckedUpdateManyInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CodePlatformAvailabilityCreateInput = {
    isValid?: boolean
    code: MovieCodeCreateNestedOneWithoutAvailabilitiesInput
    platform: RedemptionPlatformCreateNestedOneWithoutAvailabilitiesInput
  }

  export type CodePlatformAvailabilityUncheckedCreateInput = {
    availabilityId?: number
    codeId: number
    platformId: number
    isValid?: boolean
  }

  export type CodePlatformAvailabilityUpdateInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    code?: MovieCodeUpdateOneRequiredWithoutAvailabilitiesNestedInput
    platform?: RedemptionPlatformUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type CodePlatformAvailabilityUncheckedUpdateInput = {
    availabilityId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CodePlatformAvailabilityCreateManyInput = {
    availabilityId?: number
    codeId: number
    platformId: number
    isValid?: boolean
  }

  export type CodePlatformAvailabilityUpdateManyMutationInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CodePlatformAvailabilityUncheckedUpdateManyInput = {
    availabilityId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValidationHistoryCreateInput = {
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
    code?: MovieCodeCreateNestedOneWithoutValidationHistoryInput
    platform?: RedemptionPlatformCreateNestedOneWithoutValidationHistoryInput
  }

  export type ValidationHistoryUncheckedCreateInput = {
    validationId?: number
    codeId: number
    platformId?: number | null
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
  }

  export type ValidationHistoryUpdateInput = {
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    code?: MovieCodeUpdateOneWithoutValidationHistoryNestedInput
    platform?: RedemptionPlatformUpdateOneWithoutValidationHistoryNestedInput
  }

  export type ValidationHistoryUncheckedUpdateInput = {
    validationId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValidationHistoryCreateManyInput = {
    validationId?: number
    codeId: number
    platformId?: number | null
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
  }

  export type ValidationHistoryUpdateManyMutationInput = {
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValidationHistoryUncheckedUpdateManyInput = {
    validationId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ErrorLogCreateInput = {
    errorType: string
    errorMessage?: string | null
    resolved?: boolean
    code?: MovieCodeCreateNestedOneWithoutErrorLogsInput
    platform?: RedemptionPlatformCreateNestedOneWithoutErrorLogsInput
  }

  export type ErrorLogUncheckedCreateInput = {
    errorId?: number
    codeId?: number | null
    errorType: string
    errorMessage?: string | null
    platformId?: number | null
    resolved?: boolean
  }

  export type ErrorLogUpdateInput = {
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    code?: MovieCodeUpdateOneWithoutErrorLogsNestedInput
    platform?: RedemptionPlatformUpdateOneWithoutErrorLogsNestedInput
  }

  export type ErrorLogUncheckedUpdateInput = {
    errorId?: IntFieldUpdateOperationsInput | number
    codeId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ErrorLogCreateManyInput = {
    errorId?: number
    codeId?: number | null
    errorType: string
    errorMessage?: string | null
    platformId?: number | null
    resolved?: boolean
  }

  export type ErrorLogUpdateManyMutationInput = {
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ErrorLogUncheckedUpdateManyInput = {
    errorId?: IntFieldUpdateOperationsInput | number
    codeId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecheckScheduleCreateInput = {
    scheduledDate: Date | string
    priority?: $Enums.Priority
    completed?: boolean
    code: MovieCodeCreateNestedOneWithoutRecheckSchedulesInput
  }

  export type RecheckScheduleUncheckedCreateInput = {
    scheduleId?: number
    codeId: number
    scheduledDate: Date | string
    priority?: $Enums.Priority
    completed?: boolean
  }

  export type RecheckScheduleUpdateInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
    code?: MovieCodeUpdateOneRequiredWithoutRecheckSchedulesNestedInput
  }

  export type RecheckScheduleUncheckedUpdateInput = {
    scheduleId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecheckScheduleCreateManyInput = {
    scheduleId?: number
    codeId: number
    scheduledDate: Date | string
    priority?: $Enums.Priority
    completed?: boolean
  }

  export type RecheckScheduleUpdateManyMutationInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecheckScheduleUncheckedUpdateManyInput = {
    scheduleId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryCreateInput = {
    title: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type HistoryUncheckedCreateInput = {
    historyId?: number
    title: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type HistoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateManyInput = {
    historyId?: number
    title: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type HistoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MovieCodeListRelationFilter = {
    every?: MovieCodeWhereInput
    some?: MovieCodeWhereInput
    none?: MovieCodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovieCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    vendorId?: SortOrder
    vendorName?: SortOrder
    contactEmail?: SortOrder
    websiteUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    vendorId?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    vendorId?: SortOrder
    vendorName?: SortOrder
    contactEmail?: SortOrder
    websiteUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    vendorId?: SortOrder
    vendorName?: SortOrder
    contactEmail?: SortOrder
    websiteUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    vendorId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudioCountOrderByAggregateInput = {
    studioId?: SortOrder
    studioName?: SortOrder
    redemptionBaseUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioAvgOrderByAggregateInput = {
    studioId?: SortOrder
  }

  export type StudioMaxOrderByAggregateInput = {
    studioId?: SortOrder
    studioName?: SortOrder
    redemptionBaseUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioMinOrderByAggregateInput = {
    studioId?: SortOrder
    studioName?: SortOrder
    redemptionBaseUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioSumOrderByAggregateInput = {
    studioId?: SortOrder
  }

  export type CodePlatformAvailabilityListRelationFilter = {
    every?: CodePlatformAvailabilityWhereInput
    some?: CodePlatformAvailabilityWhereInput
    none?: CodePlatformAvailabilityWhereInput
  }

  export type ValidationHistoryListRelationFilter = {
    every?: ValidationHistoryWhereInput
    some?: ValidationHistoryWhereInput
    none?: ValidationHistoryWhereInput
  }

  export type ErrorLogListRelationFilter = {
    every?: ErrorLogWhereInput
    some?: ErrorLogWhereInput
    none?: ErrorLogWhereInput
  }

  export type CodePlatformAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValidationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ErrorLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RedemptionPlatformCountOrderByAggregateInput = {
    platformId?: SortOrder
    platformName?: SortOrder
    platformCode?: SortOrder
    redemptionUrl?: SortOrder
  }

  export type RedemptionPlatformAvgOrderByAggregateInput = {
    platformId?: SortOrder
  }

  export type RedemptionPlatformMaxOrderByAggregateInput = {
    platformId?: SortOrder
    platformName?: SortOrder
    platformCode?: SortOrder
    redemptionUrl?: SortOrder
  }

  export type RedemptionPlatformMinOrderByAggregateInput = {
    platformId?: SortOrder
    platformName?: SortOrder
    platformCode?: SortOrder
    redemptionUrl?: SortOrder
  }

  export type RedemptionPlatformSumOrderByAggregateInput = {
    platformId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumQualityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityNullableFilter<$PrismaModel> | $Enums.Quality | null
  }

  export type StudioNullableScalarRelationFilter = {
    is?: StudioWhereInput | null
    isNot?: StudioWhereInput | null
  }

  export type MovieTitleReleaseYearCompoundUniqueInput = {
    title: string
    releaseYear: number
  }

  export type MovieCountOrderByAggregateInput = {
    movieId?: SortOrder
    title?: SortOrder
    releaseYear?: SortOrder
    rating?: SortOrder
    quality?: SortOrder
    runtimeMinutes?: SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    movieId?: SortOrder
    releaseYear?: SortOrder
    runtimeMinutes?: SortOrder
    studioId?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    movieId?: SortOrder
    title?: SortOrder
    releaseYear?: SortOrder
    rating?: SortOrder
    quality?: SortOrder
    runtimeMinutes?: SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    movieId?: SortOrder
    title?: SortOrder
    releaseYear?: SortOrder
    rating?: SortOrder
    quality?: SortOrder
    runtimeMinutes?: SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    movieId?: SortOrder
    releaseYear?: SortOrder
    runtimeMinutes?: SortOrder
    studioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumQualityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Quality | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQualityNullableFilter<$PrismaModel>
    _max?: NestedEnumQualityNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customerId?: SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customerId?: SortOrder
    totalPurchases?: SortOrder
    totalSpent?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumQualityFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityFilter<$PrismaModel> | $Enums.Quality
  }

  export type EnumCodeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusFilter<$PrismaModel> | $Enums.CodeStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type SaleNullableScalarRelationFilter = {
    is?: SaleWhereInput | null
    isNot?: SaleWhereInput | null
  }

  export type RecheckScheduleListRelationFilter = {
    every?: RecheckScheduleWhereInput
    some?: RecheckScheduleWhereInput
    none?: RecheckScheduleWhereInput
  }

  export type RecheckScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCodeCountOrderByAggregateInput = {
    codeId?: SortOrder
    code?: SortOrder
    quality?: SortOrder
    status?: SortOrder
    isBundle?: SortOrder
    bundleTitle?: SortOrder
    vendorId?: SortOrder
    studioId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    redemptionUrl?: SortOrder
    isVerified?: SortOrder
    lastVerifiedAt?: SortOrder
    vendorOrderId?: SortOrder
  }

  export type MovieCodeAvgOrderByAggregateInput = {
    codeId?: SortOrder
    vendorId?: SortOrder
    studioId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
  }

  export type MovieCodeMaxOrderByAggregateInput = {
    codeId?: SortOrder
    code?: SortOrder
    quality?: SortOrder
    status?: SortOrder
    isBundle?: SortOrder
    bundleTitle?: SortOrder
    vendorId?: SortOrder
    studioId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    redemptionUrl?: SortOrder
    isVerified?: SortOrder
    lastVerifiedAt?: SortOrder
    vendorOrderId?: SortOrder
  }

  export type MovieCodeMinOrderByAggregateInput = {
    codeId?: SortOrder
    code?: SortOrder
    quality?: SortOrder
    status?: SortOrder
    isBundle?: SortOrder
    bundleTitle?: SortOrder
    vendorId?: SortOrder
    studioId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    redemptionUrl?: SortOrder
    isVerified?: SortOrder
    lastVerifiedAt?: SortOrder
    vendorOrderId?: SortOrder
  }

  export type MovieCodeSumOrderByAggregateInput = {
    codeId?: SortOrder
    vendorId?: SortOrder
    studioId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
  }

  export type EnumQualityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityWithAggregatesFilter<$PrismaModel> | $Enums.Quality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityFilter<$PrismaModel>
    _max?: NestedEnumQualityFilter<$PrismaModel>
  }

  export type EnumCodeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusWithAggregatesFilter<$PrismaModel> | $Enums.CodeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeStatusFilter<$PrismaModel>
    _max?: NestedEnumCodeStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MovieCodeScalarRelationFilter = {
    is?: MovieCodeWhereInput
    isNot?: MovieCodeWhereInput
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type SaleCountOrderByAggregateInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrder
    saleDate?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrder
    netProfit?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrder
    netProfit?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrder
    saleDate?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrder
    netProfit?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrder
    saleDate?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrder
    netProfit?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    saleId?: SortOrder
    codeId?: SortOrder
    customerId?: SortOrder
    salePrice?: SortOrder
    purchaseCost?: SortOrder
    netProfit?: SortOrder
  }

  export type RedemptionPlatformScalarRelationFilter = {
    is?: RedemptionPlatformWhereInput
    isNot?: RedemptionPlatformWhereInput
  }

  export type CodePlatformAvailabilityCodeIdPlatformIdCompoundUniqueInput = {
    codeId: number
    platformId: number
  }

  export type CodePlatformAvailabilityCountOrderByAggregateInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    isValid?: SortOrder
  }

  export type CodePlatformAvailabilityAvgOrderByAggregateInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
  }

  export type CodePlatformAvailabilityMaxOrderByAggregateInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    isValid?: SortOrder
  }

  export type CodePlatformAvailabilityMinOrderByAggregateInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    isValid?: SortOrder
  }

  export type CodePlatformAvailabilitySumOrderByAggregateInput = {
    availabilityId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
  }

  export type MovieCodeNullableScalarRelationFilter = {
    is?: MovieCodeWhereInput | null
    isNot?: MovieCodeWhereInput | null
  }

  export type RedemptionPlatformNullableScalarRelationFilter = {
    is?: RedemptionPlatformWhereInput | null
    isNot?: RedemptionPlatformWhereInput | null
  }

  export type ValidationHistoryCountOrderByAggregateInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    validationDate?: SortOrder
    isValid?: SortOrder
    validationMethod?: SortOrder
  }

  export type ValidationHistoryAvgOrderByAggregateInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
  }

  export type ValidationHistoryMaxOrderByAggregateInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    validationDate?: SortOrder
    isValid?: SortOrder
    validationMethod?: SortOrder
  }

  export type ValidationHistoryMinOrderByAggregateInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
    validationDate?: SortOrder
    isValid?: SortOrder
    validationMethod?: SortOrder
  }

  export type ValidationHistorySumOrderByAggregateInput = {
    validationId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
  }

  export type ErrorLogCountOrderByAggregateInput = {
    errorId?: SortOrder
    codeId?: SortOrder
    errorType?: SortOrder
    errorMessage?: SortOrder
    platformId?: SortOrder
    resolved?: SortOrder
  }

  export type ErrorLogAvgOrderByAggregateInput = {
    errorId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
  }

  export type ErrorLogMaxOrderByAggregateInput = {
    errorId?: SortOrder
    codeId?: SortOrder
    errorType?: SortOrder
    errorMessage?: SortOrder
    platformId?: SortOrder
    resolved?: SortOrder
  }

  export type ErrorLogMinOrderByAggregateInput = {
    errorId?: SortOrder
    codeId?: SortOrder
    errorType?: SortOrder
    errorMessage?: SortOrder
    platformId?: SortOrder
    resolved?: SortOrder
  }

  export type ErrorLogSumOrderByAggregateInput = {
    errorId?: SortOrder
    codeId?: SortOrder
    platformId?: SortOrder
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type RecheckScheduleCountOrderByAggregateInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
    scheduledDate?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
  }

  export type RecheckScheduleAvgOrderByAggregateInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
  }

  export type RecheckScheduleMaxOrderByAggregateInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
    scheduledDate?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
  }

  export type RecheckScheduleMinOrderByAggregateInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
    scheduledDate?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
  }

  export type RecheckScheduleSumOrderByAggregateInput = {
    scheduleId?: SortOrder
    codeId?: SortOrder
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type HistoryCountOrderByAggregateInput = {
    historyId?: SortOrder
    title?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    historyId?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    historyId?: SortOrder
    title?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    historyId?: SortOrder
    title?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    historyId?: SortOrder
  }

  export type MovieCodeCreateNestedManyWithoutVendorInput = {
    create?: XOR<MovieCodeCreateWithoutVendorInput, MovieCodeUncheckedCreateWithoutVendorInput> | MovieCodeCreateWithoutVendorInput[] | MovieCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutVendorInput | MovieCodeCreateOrConnectWithoutVendorInput[]
    createMany?: MovieCodeCreateManyVendorInputEnvelope
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
  }

  export type MovieCodeUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<MovieCodeCreateWithoutVendorInput, MovieCodeUncheckedCreateWithoutVendorInput> | MovieCodeCreateWithoutVendorInput[] | MovieCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutVendorInput | MovieCodeCreateOrConnectWithoutVendorInput[]
    createMany?: MovieCodeCreateManyVendorInputEnvelope
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovieCodeUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MovieCodeCreateWithoutVendorInput, MovieCodeUncheckedCreateWithoutVendorInput> | MovieCodeCreateWithoutVendorInput[] | MovieCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutVendorInput | MovieCodeCreateOrConnectWithoutVendorInput[]
    upsert?: MovieCodeUpsertWithWhereUniqueWithoutVendorInput | MovieCodeUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MovieCodeCreateManyVendorInputEnvelope
    set?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    disconnect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    delete?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    update?: MovieCodeUpdateWithWhereUniqueWithoutVendorInput | MovieCodeUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MovieCodeUpdateManyWithWhereWithoutVendorInput | MovieCodeUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieCodeUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MovieCodeCreateWithoutVendorInput, MovieCodeUncheckedCreateWithoutVendorInput> | MovieCodeCreateWithoutVendorInput[] | MovieCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutVendorInput | MovieCodeCreateOrConnectWithoutVendorInput[]
    upsert?: MovieCodeUpsertWithWhereUniqueWithoutVendorInput | MovieCodeUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MovieCodeCreateManyVendorInputEnvelope
    set?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    disconnect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    delete?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    update?: MovieCodeUpdateWithWhereUniqueWithoutVendorInput | MovieCodeUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MovieCodeUpdateManyWithWhereWithoutVendorInput | MovieCodeUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutStudioInput = {
    create?: XOR<MovieCreateWithoutStudioInput, MovieUncheckedCreateWithoutStudioInput> | MovieCreateWithoutStudioInput[] | MovieUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutStudioInput | MovieCreateOrConnectWithoutStudioInput[]
    createMany?: MovieCreateManyStudioInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieCodeCreateNestedManyWithoutStudioInput = {
    create?: XOR<MovieCodeCreateWithoutStudioInput, MovieCodeUncheckedCreateWithoutStudioInput> | MovieCodeCreateWithoutStudioInput[] | MovieCodeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutStudioInput | MovieCodeCreateOrConnectWithoutStudioInput[]
    createMany?: MovieCodeCreateManyStudioInputEnvelope
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<MovieCreateWithoutStudioInput, MovieUncheckedCreateWithoutStudioInput> | MovieCreateWithoutStudioInput[] | MovieUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutStudioInput | MovieCreateOrConnectWithoutStudioInput[]
    createMany?: MovieCreateManyStudioInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieCodeUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<MovieCodeCreateWithoutStudioInput, MovieCodeUncheckedCreateWithoutStudioInput> | MovieCodeCreateWithoutStudioInput[] | MovieCodeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutStudioInput | MovieCodeCreateOrConnectWithoutStudioInput[]
    createMany?: MovieCodeCreateManyStudioInputEnvelope
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
  }

  export type MovieUpdateManyWithoutStudioNestedInput = {
    create?: XOR<MovieCreateWithoutStudioInput, MovieUncheckedCreateWithoutStudioInput> | MovieCreateWithoutStudioInput[] | MovieUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutStudioInput | MovieCreateOrConnectWithoutStudioInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutStudioInput | MovieUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: MovieCreateManyStudioInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutStudioInput | MovieUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutStudioInput | MovieUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieCodeUpdateManyWithoutStudioNestedInput = {
    create?: XOR<MovieCodeCreateWithoutStudioInput, MovieCodeUncheckedCreateWithoutStudioInput> | MovieCodeCreateWithoutStudioInput[] | MovieCodeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutStudioInput | MovieCodeCreateOrConnectWithoutStudioInput[]
    upsert?: MovieCodeUpsertWithWhereUniqueWithoutStudioInput | MovieCodeUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: MovieCodeCreateManyStudioInputEnvelope
    set?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    disconnect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    delete?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    update?: MovieCodeUpdateWithWhereUniqueWithoutStudioInput | MovieCodeUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: MovieCodeUpdateManyWithWhereWithoutStudioInput | MovieCodeUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<MovieCreateWithoutStudioInput, MovieUncheckedCreateWithoutStudioInput> | MovieCreateWithoutStudioInput[] | MovieUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutStudioInput | MovieCreateOrConnectWithoutStudioInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutStudioInput | MovieUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: MovieCreateManyStudioInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutStudioInput | MovieUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutStudioInput | MovieUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieCodeUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<MovieCodeCreateWithoutStudioInput, MovieCodeUncheckedCreateWithoutStudioInput> | MovieCodeCreateWithoutStudioInput[] | MovieCodeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutStudioInput | MovieCodeCreateOrConnectWithoutStudioInput[]
    upsert?: MovieCodeUpsertWithWhereUniqueWithoutStudioInput | MovieCodeUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: MovieCodeCreateManyStudioInputEnvelope
    set?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    disconnect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    delete?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    update?: MovieCodeUpdateWithWhereUniqueWithoutStudioInput | MovieCodeUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: MovieCodeUpdateManyWithWhereWithoutStudioInput | MovieCodeUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
  }

  export type CodePlatformAvailabilityCreateNestedManyWithoutPlatformInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutPlatformInput, CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput> | CodePlatformAvailabilityCreateWithoutPlatformInput[] | CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput | CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput[]
    createMany?: CodePlatformAvailabilityCreateManyPlatformInputEnvelope
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
  }

  export type ValidationHistoryCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ValidationHistoryCreateWithoutPlatformInput, ValidationHistoryUncheckedCreateWithoutPlatformInput> | ValidationHistoryCreateWithoutPlatformInput[] | ValidationHistoryUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutPlatformInput | ValidationHistoryCreateOrConnectWithoutPlatformInput[]
    createMany?: ValidationHistoryCreateManyPlatformInputEnvelope
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
  }

  export type ErrorLogCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ErrorLogCreateWithoutPlatformInput, ErrorLogUncheckedCreateWithoutPlatformInput> | ErrorLogCreateWithoutPlatformInput[] | ErrorLogUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutPlatformInput | ErrorLogCreateOrConnectWithoutPlatformInput[]
    createMany?: ErrorLogCreateManyPlatformInputEnvelope
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
  }

  export type CodePlatformAvailabilityUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutPlatformInput, CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput> | CodePlatformAvailabilityCreateWithoutPlatformInput[] | CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput | CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput[]
    createMany?: CodePlatformAvailabilityCreateManyPlatformInputEnvelope
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
  }

  export type ValidationHistoryUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ValidationHistoryCreateWithoutPlatformInput, ValidationHistoryUncheckedCreateWithoutPlatformInput> | ValidationHistoryCreateWithoutPlatformInput[] | ValidationHistoryUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutPlatformInput | ValidationHistoryCreateOrConnectWithoutPlatformInput[]
    createMany?: ValidationHistoryCreateManyPlatformInputEnvelope
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
  }

  export type ErrorLogUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ErrorLogCreateWithoutPlatformInput, ErrorLogUncheckedCreateWithoutPlatformInput> | ErrorLogCreateWithoutPlatformInput[] | ErrorLogUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutPlatformInput | ErrorLogCreateOrConnectWithoutPlatformInput[]
    createMany?: ErrorLogCreateManyPlatformInputEnvelope
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
  }

  export type CodePlatformAvailabilityUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutPlatformInput, CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput> | CodePlatformAvailabilityCreateWithoutPlatformInput[] | CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput | CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput[]
    upsert?: CodePlatformAvailabilityUpsertWithWhereUniqueWithoutPlatformInput | CodePlatformAvailabilityUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: CodePlatformAvailabilityCreateManyPlatformInputEnvelope
    set?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    disconnect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    delete?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    update?: CodePlatformAvailabilityUpdateWithWhereUniqueWithoutPlatformInput | CodePlatformAvailabilityUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: CodePlatformAvailabilityUpdateManyWithWhereWithoutPlatformInput | CodePlatformAvailabilityUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: CodePlatformAvailabilityScalarWhereInput | CodePlatformAvailabilityScalarWhereInput[]
  }

  export type ValidationHistoryUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ValidationHistoryCreateWithoutPlatformInput, ValidationHistoryUncheckedCreateWithoutPlatformInput> | ValidationHistoryCreateWithoutPlatformInput[] | ValidationHistoryUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutPlatformInput | ValidationHistoryCreateOrConnectWithoutPlatformInput[]
    upsert?: ValidationHistoryUpsertWithWhereUniqueWithoutPlatformInput | ValidationHistoryUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ValidationHistoryCreateManyPlatformInputEnvelope
    set?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    disconnect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    delete?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    update?: ValidationHistoryUpdateWithWhereUniqueWithoutPlatformInput | ValidationHistoryUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ValidationHistoryUpdateManyWithWhereWithoutPlatformInput | ValidationHistoryUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ValidationHistoryScalarWhereInput | ValidationHistoryScalarWhereInput[]
  }

  export type ErrorLogUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ErrorLogCreateWithoutPlatformInput, ErrorLogUncheckedCreateWithoutPlatformInput> | ErrorLogCreateWithoutPlatformInput[] | ErrorLogUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutPlatformInput | ErrorLogCreateOrConnectWithoutPlatformInput[]
    upsert?: ErrorLogUpsertWithWhereUniqueWithoutPlatformInput | ErrorLogUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ErrorLogCreateManyPlatformInputEnvelope
    set?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    disconnect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    delete?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    update?: ErrorLogUpdateWithWhereUniqueWithoutPlatformInput | ErrorLogUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ErrorLogUpdateManyWithWhereWithoutPlatformInput | ErrorLogUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
  }

  export type CodePlatformAvailabilityUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutPlatformInput, CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput> | CodePlatformAvailabilityCreateWithoutPlatformInput[] | CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput | CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput[]
    upsert?: CodePlatformAvailabilityUpsertWithWhereUniqueWithoutPlatformInput | CodePlatformAvailabilityUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: CodePlatformAvailabilityCreateManyPlatformInputEnvelope
    set?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    disconnect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    delete?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    update?: CodePlatformAvailabilityUpdateWithWhereUniqueWithoutPlatformInput | CodePlatformAvailabilityUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: CodePlatformAvailabilityUpdateManyWithWhereWithoutPlatformInput | CodePlatformAvailabilityUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: CodePlatformAvailabilityScalarWhereInput | CodePlatformAvailabilityScalarWhereInput[]
  }

  export type ValidationHistoryUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ValidationHistoryCreateWithoutPlatformInput, ValidationHistoryUncheckedCreateWithoutPlatformInput> | ValidationHistoryCreateWithoutPlatformInput[] | ValidationHistoryUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutPlatformInput | ValidationHistoryCreateOrConnectWithoutPlatformInput[]
    upsert?: ValidationHistoryUpsertWithWhereUniqueWithoutPlatformInput | ValidationHistoryUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ValidationHistoryCreateManyPlatformInputEnvelope
    set?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    disconnect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    delete?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    update?: ValidationHistoryUpdateWithWhereUniqueWithoutPlatformInput | ValidationHistoryUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ValidationHistoryUpdateManyWithWhereWithoutPlatformInput | ValidationHistoryUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ValidationHistoryScalarWhereInput | ValidationHistoryScalarWhereInput[]
  }

  export type ErrorLogUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ErrorLogCreateWithoutPlatformInput, ErrorLogUncheckedCreateWithoutPlatformInput> | ErrorLogCreateWithoutPlatformInput[] | ErrorLogUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutPlatformInput | ErrorLogCreateOrConnectWithoutPlatformInput[]
    upsert?: ErrorLogUpsertWithWhereUniqueWithoutPlatformInput | ErrorLogUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ErrorLogCreateManyPlatformInputEnvelope
    set?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    disconnect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    delete?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    update?: ErrorLogUpdateWithWhereUniqueWithoutPlatformInput | ErrorLogUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ErrorLogUpdateManyWithWhereWithoutPlatformInput | ErrorLogUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
  }

  export type StudioCreateNestedOneWithoutMoviesInput = {
    create?: XOR<StudioCreateWithoutMoviesInput, StudioUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutMoviesInput
    connect?: StudioWhereUniqueInput
  }

  export type MovieCodeCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieCodeCreateWithoutMoviesInput, MovieCodeUncheckedCreateWithoutMoviesInput> | MovieCodeCreateWithoutMoviesInput[] | MovieCodeUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutMoviesInput | MovieCodeCreateOrConnectWithoutMoviesInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
  }

  export type MovieCodeUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<MovieCodeCreateWithoutMoviesInput, MovieCodeUncheckedCreateWithoutMoviesInput> | MovieCodeCreateWithoutMoviesInput[] | MovieCodeUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutMoviesInput | MovieCodeCreateOrConnectWithoutMoviesInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumQualityFieldUpdateOperationsInput = {
    set?: $Enums.Quality | null
  }

  export type StudioUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<StudioCreateWithoutMoviesInput, StudioUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutMoviesInput
    upsert?: StudioUpsertWithoutMoviesInput
    disconnect?: StudioWhereInput | boolean
    delete?: StudioWhereInput | boolean
    connect?: StudioWhereUniqueInput
    update?: XOR<XOR<StudioUpdateToOneWithWhereWithoutMoviesInput, StudioUpdateWithoutMoviesInput>, StudioUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieCodeUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieCodeCreateWithoutMoviesInput, MovieCodeUncheckedCreateWithoutMoviesInput> | MovieCodeCreateWithoutMoviesInput[] | MovieCodeUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutMoviesInput | MovieCodeCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieCodeUpsertWithWhereUniqueWithoutMoviesInput | MovieCodeUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    disconnect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    delete?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    update?: MovieCodeUpdateWithWhereUniqueWithoutMoviesInput | MovieCodeUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieCodeUpdateManyWithWhereWithoutMoviesInput | MovieCodeUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
  }

  export type MovieCodeUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<MovieCodeCreateWithoutMoviesInput, MovieCodeUncheckedCreateWithoutMoviesInput> | MovieCodeCreateWithoutMoviesInput[] | MovieCodeUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: MovieCodeCreateOrConnectWithoutMoviesInput | MovieCodeCreateOrConnectWithoutMoviesInput[]
    upsert?: MovieCodeUpsertWithWhereUniqueWithoutMoviesInput | MovieCodeUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    disconnect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    delete?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    connect?: MovieCodeWhereUniqueInput | MovieCodeWhereUniqueInput[]
    update?: MovieCodeUpdateWithWhereUniqueWithoutMoviesInput | MovieCodeUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: MovieCodeUpdateManyWithWhereWithoutMoviesInput | MovieCodeUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
  }

  export type SaleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SaleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutMovieCodesInput = {
    create?: XOR<MovieCreateWithoutMovieCodesInput, MovieUncheckedCreateWithoutMovieCodesInput> | MovieCreateWithoutMovieCodesInput[] | MovieUncheckedCreateWithoutMovieCodesInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutMovieCodesInput | MovieCreateOrConnectWithoutMovieCodesInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutMovieCodesInput = {
    create?: XOR<VendorCreateWithoutMovieCodesInput, VendorUncheckedCreateWithoutMovieCodesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMovieCodesInput
    connect?: VendorWhereUniqueInput
  }

  export type StudioCreateNestedOneWithoutMovieCodesInput = {
    create?: XOR<StudioCreateWithoutMovieCodesInput, StudioUncheckedCreateWithoutMovieCodesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutMovieCodesInput
    connect?: StudioWhereUniqueInput
  }

  export type SaleCreateNestedOneWithoutCodeInput = {
    create?: XOR<SaleCreateWithoutCodeInput, SaleUncheckedCreateWithoutCodeInput>
    connectOrCreate?: SaleCreateOrConnectWithoutCodeInput
    connect?: SaleWhereUniqueInput
  }

  export type CodePlatformAvailabilityCreateNestedManyWithoutCodeInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutCodeInput, CodePlatformAvailabilityUncheckedCreateWithoutCodeInput> | CodePlatformAvailabilityCreateWithoutCodeInput[] | CodePlatformAvailabilityUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutCodeInput | CodePlatformAvailabilityCreateOrConnectWithoutCodeInput[]
    createMany?: CodePlatformAvailabilityCreateManyCodeInputEnvelope
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
  }

  export type ValidationHistoryCreateNestedManyWithoutCodeInput = {
    create?: XOR<ValidationHistoryCreateWithoutCodeInput, ValidationHistoryUncheckedCreateWithoutCodeInput> | ValidationHistoryCreateWithoutCodeInput[] | ValidationHistoryUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutCodeInput | ValidationHistoryCreateOrConnectWithoutCodeInput[]
    createMany?: ValidationHistoryCreateManyCodeInputEnvelope
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
  }

  export type ErrorLogCreateNestedManyWithoutCodeInput = {
    create?: XOR<ErrorLogCreateWithoutCodeInput, ErrorLogUncheckedCreateWithoutCodeInput> | ErrorLogCreateWithoutCodeInput[] | ErrorLogUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutCodeInput | ErrorLogCreateOrConnectWithoutCodeInput[]
    createMany?: ErrorLogCreateManyCodeInputEnvelope
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
  }

  export type RecheckScheduleCreateNestedManyWithoutCodeInput = {
    create?: XOR<RecheckScheduleCreateWithoutCodeInput, RecheckScheduleUncheckedCreateWithoutCodeInput> | RecheckScheduleCreateWithoutCodeInput[] | RecheckScheduleUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: RecheckScheduleCreateOrConnectWithoutCodeInput | RecheckScheduleCreateOrConnectWithoutCodeInput[]
    createMany?: RecheckScheduleCreateManyCodeInputEnvelope
    connect?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutMovieCodesInput = {
    create?: XOR<MovieCreateWithoutMovieCodesInput, MovieUncheckedCreateWithoutMovieCodesInput> | MovieCreateWithoutMovieCodesInput[] | MovieUncheckedCreateWithoutMovieCodesInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutMovieCodesInput | MovieCreateOrConnectWithoutMovieCodesInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedOneWithoutCodeInput = {
    create?: XOR<SaleCreateWithoutCodeInput, SaleUncheckedCreateWithoutCodeInput>
    connectOrCreate?: SaleCreateOrConnectWithoutCodeInput
    connect?: SaleWhereUniqueInput
  }

  export type CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutCodeInput, CodePlatformAvailabilityUncheckedCreateWithoutCodeInput> | CodePlatformAvailabilityCreateWithoutCodeInput[] | CodePlatformAvailabilityUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutCodeInput | CodePlatformAvailabilityCreateOrConnectWithoutCodeInput[]
    createMany?: CodePlatformAvailabilityCreateManyCodeInputEnvelope
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
  }

  export type ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput = {
    create?: XOR<ValidationHistoryCreateWithoutCodeInput, ValidationHistoryUncheckedCreateWithoutCodeInput> | ValidationHistoryCreateWithoutCodeInput[] | ValidationHistoryUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutCodeInput | ValidationHistoryCreateOrConnectWithoutCodeInput[]
    createMany?: ValidationHistoryCreateManyCodeInputEnvelope
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
  }

  export type ErrorLogUncheckedCreateNestedManyWithoutCodeInput = {
    create?: XOR<ErrorLogCreateWithoutCodeInput, ErrorLogUncheckedCreateWithoutCodeInput> | ErrorLogCreateWithoutCodeInput[] | ErrorLogUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutCodeInput | ErrorLogCreateOrConnectWithoutCodeInput[]
    createMany?: ErrorLogCreateManyCodeInputEnvelope
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
  }

  export type RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput = {
    create?: XOR<RecheckScheduleCreateWithoutCodeInput, RecheckScheduleUncheckedCreateWithoutCodeInput> | RecheckScheduleCreateWithoutCodeInput[] | RecheckScheduleUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: RecheckScheduleCreateOrConnectWithoutCodeInput | RecheckScheduleCreateOrConnectWithoutCodeInput[]
    createMany?: RecheckScheduleCreateManyCodeInputEnvelope
    connect?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
  }

  export type EnumQualityFieldUpdateOperationsInput = {
    set?: $Enums.Quality
  }

  export type EnumCodeStatusFieldUpdateOperationsInput = {
    set?: $Enums.CodeStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MovieUpdateManyWithoutMovieCodesNestedInput = {
    create?: XOR<MovieCreateWithoutMovieCodesInput, MovieUncheckedCreateWithoutMovieCodesInput> | MovieCreateWithoutMovieCodesInput[] | MovieUncheckedCreateWithoutMovieCodesInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutMovieCodesInput | MovieCreateOrConnectWithoutMovieCodesInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutMovieCodesInput | MovieUpsertWithWhereUniqueWithoutMovieCodesInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutMovieCodesInput | MovieUpdateWithWhereUniqueWithoutMovieCodesInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutMovieCodesInput | MovieUpdateManyWithWhereWithoutMovieCodesInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type VendorUpdateOneRequiredWithoutMovieCodesNestedInput = {
    create?: XOR<VendorCreateWithoutMovieCodesInput, VendorUncheckedCreateWithoutMovieCodesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMovieCodesInput
    upsert?: VendorUpsertWithoutMovieCodesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMovieCodesInput, VendorUpdateWithoutMovieCodesInput>, VendorUncheckedUpdateWithoutMovieCodesInput>
  }

  export type StudioUpdateOneWithoutMovieCodesNestedInput = {
    create?: XOR<StudioCreateWithoutMovieCodesInput, StudioUncheckedCreateWithoutMovieCodesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutMovieCodesInput
    upsert?: StudioUpsertWithoutMovieCodesInput
    disconnect?: StudioWhereInput | boolean
    delete?: StudioWhereInput | boolean
    connect?: StudioWhereUniqueInput
    update?: XOR<XOR<StudioUpdateToOneWithWhereWithoutMovieCodesInput, StudioUpdateWithoutMovieCodesInput>, StudioUncheckedUpdateWithoutMovieCodesInput>
  }

  export type SaleUpdateOneWithoutCodeNestedInput = {
    create?: XOR<SaleCreateWithoutCodeInput, SaleUncheckedCreateWithoutCodeInput>
    connectOrCreate?: SaleCreateOrConnectWithoutCodeInput
    upsert?: SaleUpsertWithoutCodeInput
    disconnect?: SaleWhereInput | boolean
    delete?: SaleWhereInput | boolean
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutCodeInput, SaleUpdateWithoutCodeInput>, SaleUncheckedUpdateWithoutCodeInput>
  }

  export type CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutCodeInput, CodePlatformAvailabilityUncheckedCreateWithoutCodeInput> | CodePlatformAvailabilityCreateWithoutCodeInput[] | CodePlatformAvailabilityUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutCodeInput | CodePlatformAvailabilityCreateOrConnectWithoutCodeInput[]
    upsert?: CodePlatformAvailabilityUpsertWithWhereUniqueWithoutCodeInput | CodePlatformAvailabilityUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: CodePlatformAvailabilityCreateManyCodeInputEnvelope
    set?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    disconnect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    delete?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    update?: CodePlatformAvailabilityUpdateWithWhereUniqueWithoutCodeInput | CodePlatformAvailabilityUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: CodePlatformAvailabilityUpdateManyWithWhereWithoutCodeInput | CodePlatformAvailabilityUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: CodePlatformAvailabilityScalarWhereInput | CodePlatformAvailabilityScalarWhereInput[]
  }

  export type ValidationHistoryUpdateManyWithoutCodeNestedInput = {
    create?: XOR<ValidationHistoryCreateWithoutCodeInput, ValidationHistoryUncheckedCreateWithoutCodeInput> | ValidationHistoryCreateWithoutCodeInput[] | ValidationHistoryUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutCodeInput | ValidationHistoryCreateOrConnectWithoutCodeInput[]
    upsert?: ValidationHistoryUpsertWithWhereUniqueWithoutCodeInput | ValidationHistoryUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: ValidationHistoryCreateManyCodeInputEnvelope
    set?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    disconnect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    delete?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    update?: ValidationHistoryUpdateWithWhereUniqueWithoutCodeInput | ValidationHistoryUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: ValidationHistoryUpdateManyWithWhereWithoutCodeInput | ValidationHistoryUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: ValidationHistoryScalarWhereInput | ValidationHistoryScalarWhereInput[]
  }

  export type ErrorLogUpdateManyWithoutCodeNestedInput = {
    create?: XOR<ErrorLogCreateWithoutCodeInput, ErrorLogUncheckedCreateWithoutCodeInput> | ErrorLogCreateWithoutCodeInput[] | ErrorLogUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutCodeInput | ErrorLogCreateOrConnectWithoutCodeInput[]
    upsert?: ErrorLogUpsertWithWhereUniqueWithoutCodeInput | ErrorLogUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: ErrorLogCreateManyCodeInputEnvelope
    set?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    disconnect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    delete?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    update?: ErrorLogUpdateWithWhereUniqueWithoutCodeInput | ErrorLogUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: ErrorLogUpdateManyWithWhereWithoutCodeInput | ErrorLogUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
  }

  export type RecheckScheduleUpdateManyWithoutCodeNestedInput = {
    create?: XOR<RecheckScheduleCreateWithoutCodeInput, RecheckScheduleUncheckedCreateWithoutCodeInput> | RecheckScheduleCreateWithoutCodeInput[] | RecheckScheduleUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: RecheckScheduleCreateOrConnectWithoutCodeInput | RecheckScheduleCreateOrConnectWithoutCodeInput[]
    upsert?: RecheckScheduleUpsertWithWhereUniqueWithoutCodeInput | RecheckScheduleUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: RecheckScheduleCreateManyCodeInputEnvelope
    set?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    disconnect?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    delete?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    connect?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    update?: RecheckScheduleUpdateWithWhereUniqueWithoutCodeInput | RecheckScheduleUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: RecheckScheduleUpdateManyWithWhereWithoutCodeInput | RecheckScheduleUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: RecheckScheduleScalarWhereInput | RecheckScheduleScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutMovieCodesNestedInput = {
    create?: XOR<MovieCreateWithoutMovieCodesInput, MovieUncheckedCreateWithoutMovieCodesInput> | MovieCreateWithoutMovieCodesInput[] | MovieUncheckedCreateWithoutMovieCodesInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutMovieCodesInput | MovieCreateOrConnectWithoutMovieCodesInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutMovieCodesInput | MovieUpsertWithWhereUniqueWithoutMovieCodesInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutMovieCodesInput | MovieUpdateWithWhereUniqueWithoutMovieCodesInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutMovieCodesInput | MovieUpdateManyWithWhereWithoutMovieCodesInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type SaleUncheckedUpdateOneWithoutCodeNestedInput = {
    create?: XOR<SaleCreateWithoutCodeInput, SaleUncheckedCreateWithoutCodeInput>
    connectOrCreate?: SaleCreateOrConnectWithoutCodeInput
    upsert?: SaleUpsertWithoutCodeInput
    disconnect?: SaleWhereInput | boolean
    delete?: SaleWhereInput | boolean
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutCodeInput, SaleUpdateWithoutCodeInput>, SaleUncheckedUpdateWithoutCodeInput>
  }

  export type CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput = {
    create?: XOR<CodePlatformAvailabilityCreateWithoutCodeInput, CodePlatformAvailabilityUncheckedCreateWithoutCodeInput> | CodePlatformAvailabilityCreateWithoutCodeInput[] | CodePlatformAvailabilityUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CodePlatformAvailabilityCreateOrConnectWithoutCodeInput | CodePlatformAvailabilityCreateOrConnectWithoutCodeInput[]
    upsert?: CodePlatformAvailabilityUpsertWithWhereUniqueWithoutCodeInput | CodePlatformAvailabilityUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: CodePlatformAvailabilityCreateManyCodeInputEnvelope
    set?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    disconnect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    delete?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    connect?: CodePlatformAvailabilityWhereUniqueInput | CodePlatformAvailabilityWhereUniqueInput[]
    update?: CodePlatformAvailabilityUpdateWithWhereUniqueWithoutCodeInput | CodePlatformAvailabilityUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: CodePlatformAvailabilityUpdateManyWithWhereWithoutCodeInput | CodePlatformAvailabilityUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: CodePlatformAvailabilityScalarWhereInput | CodePlatformAvailabilityScalarWhereInput[]
  }

  export type ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput = {
    create?: XOR<ValidationHistoryCreateWithoutCodeInput, ValidationHistoryUncheckedCreateWithoutCodeInput> | ValidationHistoryCreateWithoutCodeInput[] | ValidationHistoryUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ValidationHistoryCreateOrConnectWithoutCodeInput | ValidationHistoryCreateOrConnectWithoutCodeInput[]
    upsert?: ValidationHistoryUpsertWithWhereUniqueWithoutCodeInput | ValidationHistoryUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: ValidationHistoryCreateManyCodeInputEnvelope
    set?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    disconnect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    delete?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    connect?: ValidationHistoryWhereUniqueInput | ValidationHistoryWhereUniqueInput[]
    update?: ValidationHistoryUpdateWithWhereUniqueWithoutCodeInput | ValidationHistoryUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: ValidationHistoryUpdateManyWithWhereWithoutCodeInput | ValidationHistoryUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: ValidationHistoryScalarWhereInput | ValidationHistoryScalarWhereInput[]
  }

  export type ErrorLogUncheckedUpdateManyWithoutCodeNestedInput = {
    create?: XOR<ErrorLogCreateWithoutCodeInput, ErrorLogUncheckedCreateWithoutCodeInput> | ErrorLogCreateWithoutCodeInput[] | ErrorLogUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutCodeInput | ErrorLogCreateOrConnectWithoutCodeInput[]
    upsert?: ErrorLogUpsertWithWhereUniqueWithoutCodeInput | ErrorLogUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: ErrorLogCreateManyCodeInputEnvelope
    set?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    disconnect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    delete?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    update?: ErrorLogUpdateWithWhereUniqueWithoutCodeInput | ErrorLogUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: ErrorLogUpdateManyWithWhereWithoutCodeInput | ErrorLogUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
  }

  export type RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput = {
    create?: XOR<RecheckScheduleCreateWithoutCodeInput, RecheckScheduleUncheckedCreateWithoutCodeInput> | RecheckScheduleCreateWithoutCodeInput[] | RecheckScheduleUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: RecheckScheduleCreateOrConnectWithoutCodeInput | RecheckScheduleCreateOrConnectWithoutCodeInput[]
    upsert?: RecheckScheduleUpsertWithWhereUniqueWithoutCodeInput | RecheckScheduleUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: RecheckScheduleCreateManyCodeInputEnvelope
    set?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    disconnect?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    delete?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    connect?: RecheckScheduleWhereUniqueInput | RecheckScheduleWhereUniqueInput[]
    update?: RecheckScheduleUpdateWithWhereUniqueWithoutCodeInput | RecheckScheduleUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: RecheckScheduleUpdateManyWithWhereWithoutCodeInput | RecheckScheduleUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: RecheckScheduleScalarWhereInput | RecheckScheduleScalarWhereInput[]
  }

  export type MovieCodeCreateNestedOneWithoutSalesInput = {
    create?: XOR<MovieCodeCreateWithoutSalesInput, MovieCodeUncheckedCreateWithoutSalesInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutSalesInput
    connect?: MovieCodeWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutSalesInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    connect?: CustomerWhereUniqueInput
  }

  export type MovieCodeUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<MovieCodeCreateWithoutSalesInput, MovieCodeUncheckedCreateWithoutSalesInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutSalesInput
    upsert?: MovieCodeUpsertWithoutSalesInput
    connect?: MovieCodeWhereUniqueInput
    update?: XOR<XOR<MovieCodeUpdateToOneWithWhereWithoutSalesInput, MovieCodeUpdateWithoutSalesInput>, MovieCodeUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateOneWithoutSalesNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    upsert?: CustomerUpsertWithoutSalesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesInput, CustomerUpdateWithoutSalesInput>, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type MovieCodeCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<MovieCodeCreateWithoutAvailabilitiesInput, MovieCodeUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutAvailabilitiesInput
    connect?: MovieCodeWhereUniqueInput
  }

  export type RedemptionPlatformCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<RedemptionPlatformCreateWithoutAvailabilitiesInput, RedemptionPlatformUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RedemptionPlatformCreateOrConnectWithoutAvailabilitiesInput
    connect?: RedemptionPlatformWhereUniqueInput
  }

  export type MovieCodeUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<MovieCodeCreateWithoutAvailabilitiesInput, MovieCodeUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutAvailabilitiesInput
    upsert?: MovieCodeUpsertWithoutAvailabilitiesInput
    connect?: MovieCodeWhereUniqueInput
    update?: XOR<XOR<MovieCodeUpdateToOneWithWhereWithoutAvailabilitiesInput, MovieCodeUpdateWithoutAvailabilitiesInput>, MovieCodeUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RedemptionPlatformUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<RedemptionPlatformCreateWithoutAvailabilitiesInput, RedemptionPlatformUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RedemptionPlatformCreateOrConnectWithoutAvailabilitiesInput
    upsert?: RedemptionPlatformUpsertWithoutAvailabilitiesInput
    connect?: RedemptionPlatformWhereUniqueInput
    update?: XOR<XOR<RedemptionPlatformUpdateToOneWithWhereWithoutAvailabilitiesInput, RedemptionPlatformUpdateWithoutAvailabilitiesInput>, RedemptionPlatformUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type MovieCodeCreateNestedOneWithoutValidationHistoryInput = {
    create?: XOR<MovieCodeCreateWithoutValidationHistoryInput, MovieCodeUncheckedCreateWithoutValidationHistoryInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutValidationHistoryInput
    connect?: MovieCodeWhereUniqueInput
  }

  export type RedemptionPlatformCreateNestedOneWithoutValidationHistoryInput = {
    create?: XOR<RedemptionPlatformCreateWithoutValidationHistoryInput, RedemptionPlatformUncheckedCreateWithoutValidationHistoryInput>
    connectOrCreate?: RedemptionPlatformCreateOrConnectWithoutValidationHistoryInput
    connect?: RedemptionPlatformWhereUniqueInput
  }

  export type MovieCodeUpdateOneWithoutValidationHistoryNestedInput = {
    create?: XOR<MovieCodeCreateWithoutValidationHistoryInput, MovieCodeUncheckedCreateWithoutValidationHistoryInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutValidationHistoryInput
    upsert?: MovieCodeUpsertWithoutValidationHistoryInput
    disconnect?: MovieCodeWhereInput | boolean
    delete?: MovieCodeWhereInput | boolean
    connect?: MovieCodeWhereUniqueInput
    update?: XOR<XOR<MovieCodeUpdateToOneWithWhereWithoutValidationHistoryInput, MovieCodeUpdateWithoutValidationHistoryInput>, MovieCodeUncheckedUpdateWithoutValidationHistoryInput>
  }

  export type RedemptionPlatformUpdateOneWithoutValidationHistoryNestedInput = {
    create?: XOR<RedemptionPlatformCreateWithoutValidationHistoryInput, RedemptionPlatformUncheckedCreateWithoutValidationHistoryInput>
    connectOrCreate?: RedemptionPlatformCreateOrConnectWithoutValidationHistoryInput
    upsert?: RedemptionPlatformUpsertWithoutValidationHistoryInput
    disconnect?: RedemptionPlatformWhereInput | boolean
    delete?: RedemptionPlatformWhereInput | boolean
    connect?: RedemptionPlatformWhereUniqueInput
    update?: XOR<XOR<RedemptionPlatformUpdateToOneWithWhereWithoutValidationHistoryInput, RedemptionPlatformUpdateWithoutValidationHistoryInput>, RedemptionPlatformUncheckedUpdateWithoutValidationHistoryInput>
  }

  export type MovieCodeCreateNestedOneWithoutErrorLogsInput = {
    create?: XOR<MovieCodeCreateWithoutErrorLogsInput, MovieCodeUncheckedCreateWithoutErrorLogsInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutErrorLogsInput
    connect?: MovieCodeWhereUniqueInput
  }

  export type RedemptionPlatformCreateNestedOneWithoutErrorLogsInput = {
    create?: XOR<RedemptionPlatformCreateWithoutErrorLogsInput, RedemptionPlatformUncheckedCreateWithoutErrorLogsInput>
    connectOrCreate?: RedemptionPlatformCreateOrConnectWithoutErrorLogsInput
    connect?: RedemptionPlatformWhereUniqueInput
  }

  export type MovieCodeUpdateOneWithoutErrorLogsNestedInput = {
    create?: XOR<MovieCodeCreateWithoutErrorLogsInput, MovieCodeUncheckedCreateWithoutErrorLogsInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutErrorLogsInput
    upsert?: MovieCodeUpsertWithoutErrorLogsInput
    disconnect?: MovieCodeWhereInput | boolean
    delete?: MovieCodeWhereInput | boolean
    connect?: MovieCodeWhereUniqueInput
    update?: XOR<XOR<MovieCodeUpdateToOneWithWhereWithoutErrorLogsInput, MovieCodeUpdateWithoutErrorLogsInput>, MovieCodeUncheckedUpdateWithoutErrorLogsInput>
  }

  export type RedemptionPlatformUpdateOneWithoutErrorLogsNestedInput = {
    create?: XOR<RedemptionPlatformCreateWithoutErrorLogsInput, RedemptionPlatformUncheckedCreateWithoutErrorLogsInput>
    connectOrCreate?: RedemptionPlatformCreateOrConnectWithoutErrorLogsInput
    upsert?: RedemptionPlatformUpsertWithoutErrorLogsInput
    disconnect?: RedemptionPlatformWhereInput | boolean
    delete?: RedemptionPlatformWhereInput | boolean
    connect?: RedemptionPlatformWhereUniqueInput
    update?: XOR<XOR<RedemptionPlatformUpdateToOneWithWhereWithoutErrorLogsInput, RedemptionPlatformUpdateWithoutErrorLogsInput>, RedemptionPlatformUncheckedUpdateWithoutErrorLogsInput>
  }

  export type MovieCodeCreateNestedOneWithoutRecheckSchedulesInput = {
    create?: XOR<MovieCodeCreateWithoutRecheckSchedulesInput, MovieCodeUncheckedCreateWithoutRecheckSchedulesInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutRecheckSchedulesInput
    connect?: MovieCodeWhereUniqueInput
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type MovieCodeUpdateOneRequiredWithoutRecheckSchedulesNestedInput = {
    create?: XOR<MovieCodeCreateWithoutRecheckSchedulesInput, MovieCodeUncheckedCreateWithoutRecheckSchedulesInput>
    connectOrCreate?: MovieCodeCreateOrConnectWithoutRecheckSchedulesInput
    upsert?: MovieCodeUpsertWithoutRecheckSchedulesInput
    connect?: MovieCodeWhereUniqueInput
    update?: XOR<XOR<MovieCodeUpdateToOneWithWhereWithoutRecheckSchedulesInput, MovieCodeUpdateWithoutRecheckSchedulesInput>, MovieCodeUncheckedUpdateWithoutRecheckSchedulesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumQualityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityNullableFilter<$PrismaModel> | $Enums.Quality | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumQualityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQualityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Quality | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQualityNullableFilter<$PrismaModel>
    _max?: NestedEnumQualityNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumQualityFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityFilter<$PrismaModel> | $Enums.Quality
  }

  export type NestedEnumCodeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusFilter<$PrismaModel> | $Enums.CodeStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumQualityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityWithAggregatesFilter<$PrismaModel> | $Enums.Quality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityFilter<$PrismaModel>
    _max?: NestedEnumQualityFilter<$PrismaModel>
  }

  export type NestedEnumCodeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusWithAggregatesFilter<$PrismaModel> | $Enums.CodeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeStatusFilter<$PrismaModel>
    _max?: NestedEnumCodeStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type MovieCodeCreateWithoutVendorInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutVendorInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutVendorInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutVendorInput, MovieCodeUncheckedCreateWithoutVendorInput>
  }

  export type MovieCodeCreateManyVendorInputEnvelope = {
    data: MovieCodeCreateManyVendorInput | MovieCodeCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type MovieCodeUpsertWithWhereUniqueWithoutVendorInput = {
    where: MovieCodeWhereUniqueInput
    update: XOR<MovieCodeUpdateWithoutVendorInput, MovieCodeUncheckedUpdateWithoutVendorInput>
    create: XOR<MovieCodeCreateWithoutVendorInput, MovieCodeUncheckedCreateWithoutVendorInput>
  }

  export type MovieCodeUpdateWithWhereUniqueWithoutVendorInput = {
    where: MovieCodeWhereUniqueInput
    data: XOR<MovieCodeUpdateWithoutVendorInput, MovieCodeUncheckedUpdateWithoutVendorInput>
  }

  export type MovieCodeUpdateManyWithWhereWithoutVendorInput = {
    where: MovieCodeScalarWhereInput
    data: XOR<MovieCodeUpdateManyMutationInput, MovieCodeUncheckedUpdateManyWithoutVendorInput>
  }

  export type MovieCodeScalarWhereInput = {
    AND?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
    OR?: MovieCodeScalarWhereInput[]
    NOT?: MovieCodeScalarWhereInput | MovieCodeScalarWhereInput[]
    codeId?: IntFilter<"MovieCode"> | number
    code?: StringFilter<"MovieCode"> | string
    quality?: EnumQualityFilter<"MovieCode"> | $Enums.Quality
    status?: EnumCodeStatusFilter<"MovieCode"> | $Enums.CodeStatus
    isBundle?: BoolFilter<"MovieCode"> | boolean
    bundleTitle?: StringNullableFilter<"MovieCode"> | string | null
    vendorId?: IntFilter<"MovieCode"> | number
    studioId?: IntNullableFilter<"MovieCode"> | number | null
    purchasePrice?: DecimalNullableFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: DecimalNullableFilter<"MovieCode"> | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: StringNullableFilter<"MovieCode"> | string | null
    isVerified?: BoolFilter<"MovieCode"> | boolean
    lastVerifiedAt?: DateTimeNullableFilter<"MovieCode"> | Date | string | null
    vendorOrderId?: StringNullableFilter<"MovieCode"> | string | null
  }

  export type MovieCreateWithoutStudioInput = {
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    movieCodes?: MovieCodeCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutStudioInput = {
    movieId?: number
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    movieCodes?: MovieCodeUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutStudioInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutStudioInput, MovieUncheckedCreateWithoutStudioInput>
  }

  export type MovieCreateManyStudioInputEnvelope = {
    data: MovieCreateManyStudioInput | MovieCreateManyStudioInput[]
    skipDuplicates?: boolean
  }

  export type MovieCodeCreateWithoutStudioInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutStudioInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutStudioInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutStudioInput, MovieCodeUncheckedCreateWithoutStudioInput>
  }

  export type MovieCodeCreateManyStudioInputEnvelope = {
    data: MovieCodeCreateManyStudioInput | MovieCodeCreateManyStudioInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithWhereUniqueWithoutStudioInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutStudioInput, MovieUncheckedUpdateWithoutStudioInput>
    create: XOR<MovieCreateWithoutStudioInput, MovieUncheckedCreateWithoutStudioInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutStudioInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutStudioInput, MovieUncheckedUpdateWithoutStudioInput>
  }

  export type MovieUpdateManyWithWhereWithoutStudioInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutStudioInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    movieId?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    releaseYear?: IntNullableFilter<"Movie"> | number | null
    rating?: StringNullableFilter<"Movie"> | string | null
    quality?: EnumQualityNullableFilter<"Movie"> | $Enums.Quality | null
    runtimeMinutes?: IntNullableFilter<"Movie"> | number | null
    imageUrl?: StringNullableFilter<"Movie"> | string | null
    studioId?: IntNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
  }

  export type MovieCodeUpsertWithWhereUniqueWithoutStudioInput = {
    where: MovieCodeWhereUniqueInput
    update: XOR<MovieCodeUpdateWithoutStudioInput, MovieCodeUncheckedUpdateWithoutStudioInput>
    create: XOR<MovieCodeCreateWithoutStudioInput, MovieCodeUncheckedCreateWithoutStudioInput>
  }

  export type MovieCodeUpdateWithWhereUniqueWithoutStudioInput = {
    where: MovieCodeWhereUniqueInput
    data: XOR<MovieCodeUpdateWithoutStudioInput, MovieCodeUncheckedUpdateWithoutStudioInput>
  }

  export type MovieCodeUpdateManyWithWhereWithoutStudioInput = {
    where: MovieCodeScalarWhereInput
    data: XOR<MovieCodeUpdateManyMutationInput, MovieCodeUncheckedUpdateManyWithoutStudioInput>
  }

  export type CodePlatformAvailabilityCreateWithoutPlatformInput = {
    isValid?: boolean
    code: MovieCodeCreateNestedOneWithoutAvailabilitiesInput
  }

  export type CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput = {
    availabilityId?: number
    codeId: number
    isValid?: boolean
  }

  export type CodePlatformAvailabilityCreateOrConnectWithoutPlatformInput = {
    where: CodePlatformAvailabilityWhereUniqueInput
    create: XOR<CodePlatformAvailabilityCreateWithoutPlatformInput, CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput>
  }

  export type CodePlatformAvailabilityCreateManyPlatformInputEnvelope = {
    data: CodePlatformAvailabilityCreateManyPlatformInput | CodePlatformAvailabilityCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ValidationHistoryCreateWithoutPlatformInput = {
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
    code?: MovieCodeCreateNestedOneWithoutValidationHistoryInput
  }

  export type ValidationHistoryUncheckedCreateWithoutPlatformInput = {
    validationId?: number
    codeId: number
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
  }

  export type ValidationHistoryCreateOrConnectWithoutPlatformInput = {
    where: ValidationHistoryWhereUniqueInput
    create: XOR<ValidationHistoryCreateWithoutPlatformInput, ValidationHistoryUncheckedCreateWithoutPlatformInput>
  }

  export type ValidationHistoryCreateManyPlatformInputEnvelope = {
    data: ValidationHistoryCreateManyPlatformInput | ValidationHistoryCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ErrorLogCreateWithoutPlatformInput = {
    errorType: string
    errorMessage?: string | null
    resolved?: boolean
    code?: MovieCodeCreateNestedOneWithoutErrorLogsInput
  }

  export type ErrorLogUncheckedCreateWithoutPlatformInput = {
    errorId?: number
    codeId?: number | null
    errorType: string
    errorMessage?: string | null
    resolved?: boolean
  }

  export type ErrorLogCreateOrConnectWithoutPlatformInput = {
    where: ErrorLogWhereUniqueInput
    create: XOR<ErrorLogCreateWithoutPlatformInput, ErrorLogUncheckedCreateWithoutPlatformInput>
  }

  export type ErrorLogCreateManyPlatformInputEnvelope = {
    data: ErrorLogCreateManyPlatformInput | ErrorLogCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type CodePlatformAvailabilityUpsertWithWhereUniqueWithoutPlatformInput = {
    where: CodePlatformAvailabilityWhereUniqueInput
    update: XOR<CodePlatformAvailabilityUpdateWithoutPlatformInput, CodePlatformAvailabilityUncheckedUpdateWithoutPlatformInput>
    create: XOR<CodePlatformAvailabilityCreateWithoutPlatformInput, CodePlatformAvailabilityUncheckedCreateWithoutPlatformInput>
  }

  export type CodePlatformAvailabilityUpdateWithWhereUniqueWithoutPlatformInput = {
    where: CodePlatformAvailabilityWhereUniqueInput
    data: XOR<CodePlatformAvailabilityUpdateWithoutPlatformInput, CodePlatformAvailabilityUncheckedUpdateWithoutPlatformInput>
  }

  export type CodePlatformAvailabilityUpdateManyWithWhereWithoutPlatformInput = {
    where: CodePlatformAvailabilityScalarWhereInput
    data: XOR<CodePlatformAvailabilityUpdateManyMutationInput, CodePlatformAvailabilityUncheckedUpdateManyWithoutPlatformInput>
  }

  export type CodePlatformAvailabilityScalarWhereInput = {
    AND?: CodePlatformAvailabilityScalarWhereInput | CodePlatformAvailabilityScalarWhereInput[]
    OR?: CodePlatformAvailabilityScalarWhereInput[]
    NOT?: CodePlatformAvailabilityScalarWhereInput | CodePlatformAvailabilityScalarWhereInput[]
    availabilityId?: IntFilter<"CodePlatformAvailability"> | number
    codeId?: IntFilter<"CodePlatformAvailability"> | number
    platformId?: IntFilter<"CodePlatformAvailability"> | number
    isValid?: BoolFilter<"CodePlatformAvailability"> | boolean
  }

  export type ValidationHistoryUpsertWithWhereUniqueWithoutPlatformInput = {
    where: ValidationHistoryWhereUniqueInput
    update: XOR<ValidationHistoryUpdateWithoutPlatformInput, ValidationHistoryUncheckedUpdateWithoutPlatformInput>
    create: XOR<ValidationHistoryCreateWithoutPlatformInput, ValidationHistoryUncheckedCreateWithoutPlatformInput>
  }

  export type ValidationHistoryUpdateWithWhereUniqueWithoutPlatformInput = {
    where: ValidationHistoryWhereUniqueInput
    data: XOR<ValidationHistoryUpdateWithoutPlatformInput, ValidationHistoryUncheckedUpdateWithoutPlatformInput>
  }

  export type ValidationHistoryUpdateManyWithWhereWithoutPlatformInput = {
    where: ValidationHistoryScalarWhereInput
    data: XOR<ValidationHistoryUpdateManyMutationInput, ValidationHistoryUncheckedUpdateManyWithoutPlatformInput>
  }

  export type ValidationHistoryScalarWhereInput = {
    AND?: ValidationHistoryScalarWhereInput | ValidationHistoryScalarWhereInput[]
    OR?: ValidationHistoryScalarWhereInput[]
    NOT?: ValidationHistoryScalarWhereInput | ValidationHistoryScalarWhereInput[]
    validationId?: IntFilter<"ValidationHistory"> | number
    codeId?: IntFilter<"ValidationHistory"> | number
    platformId?: IntNullableFilter<"ValidationHistory"> | number | null
    validationDate?: DateTimeFilter<"ValidationHistory"> | Date | string
    isValid?: BoolFilter<"ValidationHistory"> | boolean
    validationMethod?: StringNullableFilter<"ValidationHistory"> | string | null
  }

  export type ErrorLogUpsertWithWhereUniqueWithoutPlatformInput = {
    where: ErrorLogWhereUniqueInput
    update: XOR<ErrorLogUpdateWithoutPlatformInput, ErrorLogUncheckedUpdateWithoutPlatformInput>
    create: XOR<ErrorLogCreateWithoutPlatformInput, ErrorLogUncheckedCreateWithoutPlatformInput>
  }

  export type ErrorLogUpdateWithWhereUniqueWithoutPlatformInput = {
    where: ErrorLogWhereUniqueInput
    data: XOR<ErrorLogUpdateWithoutPlatformInput, ErrorLogUncheckedUpdateWithoutPlatformInput>
  }

  export type ErrorLogUpdateManyWithWhereWithoutPlatformInput = {
    where: ErrorLogScalarWhereInput
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyWithoutPlatformInput>
  }

  export type ErrorLogScalarWhereInput = {
    AND?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
    OR?: ErrorLogScalarWhereInput[]
    NOT?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
    errorId?: IntFilter<"ErrorLog"> | number
    codeId?: IntNullableFilter<"ErrorLog"> | number | null
    errorType?: StringFilter<"ErrorLog"> | string
    errorMessage?: StringNullableFilter<"ErrorLog"> | string | null
    platformId?: IntNullableFilter<"ErrorLog"> | number | null
    resolved?: BoolFilter<"ErrorLog"> | boolean
  }

  export type StudioCreateWithoutMoviesInput = {
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
    movieCodes?: MovieCodeCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateWithoutMoviesInput = {
    studioId?: number
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
    movieCodes?: MovieCodeUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioCreateOrConnectWithoutMoviesInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutMoviesInput, StudioUncheckedCreateWithoutMoviesInput>
  }

  export type MovieCodeCreateWithoutMoviesInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutMoviesInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutMoviesInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutMoviesInput, MovieCodeUncheckedCreateWithoutMoviesInput>
  }

  export type StudioUpsertWithoutMoviesInput = {
    update: XOR<StudioUpdateWithoutMoviesInput, StudioUncheckedUpdateWithoutMoviesInput>
    create: XOR<StudioCreateWithoutMoviesInput, StudioUncheckedCreateWithoutMoviesInput>
    where?: StudioWhereInput
  }

  export type StudioUpdateToOneWithWhereWithoutMoviesInput = {
    where?: StudioWhereInput
    data: XOR<StudioUpdateWithoutMoviesInput, StudioUncheckedUpdateWithoutMoviesInput>
  }

  export type StudioUpdateWithoutMoviesInput = {
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateWithoutMoviesInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type MovieCodeUpsertWithWhereUniqueWithoutMoviesInput = {
    where: MovieCodeWhereUniqueInput
    update: XOR<MovieCodeUpdateWithoutMoviesInput, MovieCodeUncheckedUpdateWithoutMoviesInput>
    create: XOR<MovieCodeCreateWithoutMoviesInput, MovieCodeUncheckedCreateWithoutMoviesInput>
  }

  export type MovieCodeUpdateWithWhereUniqueWithoutMoviesInput = {
    where: MovieCodeWhereUniqueInput
    data: XOR<MovieCodeUpdateWithoutMoviesInput, MovieCodeUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieCodeUpdateManyWithWhereWithoutMoviesInput = {
    where: MovieCodeScalarWhereInput
    data: XOR<MovieCodeUpdateManyMutationInput, MovieCodeUncheckedUpdateManyWithoutMoviesInput>
  }

  export type SaleCreateWithoutCustomerInput = {
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
    code: MovieCodeCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutCustomerInput = {
    saleId?: number
    codeId: number
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
  }

  export type SaleCreateOrConnectWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleCreateManyCustomerInputEnvelope = {
    data: SaleCreateManyCustomerInput | SaleCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
  }

  export type SaleUpdateManyWithWhereWithoutCustomerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    saleId?: IntFilter<"Sale"> | number
    codeId?: IntFilter<"Sale"> | number
    customerId?: IntNullableFilter<"Sale"> | number | null
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    salePrice?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalNullableFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
  }

  export type MovieCreateWithoutMovieCodesInput = {
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    studio?: StudioCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutMovieCodesInput = {
    movieId?: number
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    studioId?: number | null
    createdAt?: Date | string
  }

  export type MovieCreateOrConnectWithoutMovieCodesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieCodesInput, MovieUncheckedCreateWithoutMovieCodesInput>
  }

  export type VendorCreateWithoutMovieCodesInput = {
    vendorName: string
    contactEmail?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type VendorUncheckedCreateWithoutMovieCodesInput = {
    vendorId?: number
    vendorName: string
    contactEmail?: string | null
    websiteUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type VendorCreateOrConnectWithoutMovieCodesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMovieCodesInput, VendorUncheckedCreateWithoutMovieCodesInput>
  }

  export type StudioCreateWithoutMovieCodesInput = {
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
    movies?: MovieCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateWithoutMovieCodesInput = {
    studioId?: number
    studioName: string
    redemptionBaseUrl?: string | null
    createdAt?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioCreateOrConnectWithoutMovieCodesInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutMovieCodesInput, StudioUncheckedCreateWithoutMovieCodesInput>
  }

  export type SaleCreateWithoutCodeInput = {
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
    customer?: CustomerCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutCodeInput = {
    saleId?: number
    customerId?: number | null
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
  }

  export type SaleCreateOrConnectWithoutCodeInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCodeInput, SaleUncheckedCreateWithoutCodeInput>
  }

  export type CodePlatformAvailabilityCreateWithoutCodeInput = {
    isValid?: boolean
    platform: RedemptionPlatformCreateNestedOneWithoutAvailabilitiesInput
  }

  export type CodePlatformAvailabilityUncheckedCreateWithoutCodeInput = {
    availabilityId?: number
    platformId: number
    isValid?: boolean
  }

  export type CodePlatformAvailabilityCreateOrConnectWithoutCodeInput = {
    where: CodePlatformAvailabilityWhereUniqueInput
    create: XOR<CodePlatformAvailabilityCreateWithoutCodeInput, CodePlatformAvailabilityUncheckedCreateWithoutCodeInput>
  }

  export type CodePlatformAvailabilityCreateManyCodeInputEnvelope = {
    data: CodePlatformAvailabilityCreateManyCodeInput | CodePlatformAvailabilityCreateManyCodeInput[]
    skipDuplicates?: boolean
  }

  export type ValidationHistoryCreateWithoutCodeInput = {
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
    platform?: RedemptionPlatformCreateNestedOneWithoutValidationHistoryInput
  }

  export type ValidationHistoryUncheckedCreateWithoutCodeInput = {
    validationId?: number
    platformId?: number | null
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
  }

  export type ValidationHistoryCreateOrConnectWithoutCodeInput = {
    where: ValidationHistoryWhereUniqueInput
    create: XOR<ValidationHistoryCreateWithoutCodeInput, ValidationHistoryUncheckedCreateWithoutCodeInput>
  }

  export type ValidationHistoryCreateManyCodeInputEnvelope = {
    data: ValidationHistoryCreateManyCodeInput | ValidationHistoryCreateManyCodeInput[]
    skipDuplicates?: boolean
  }

  export type ErrorLogCreateWithoutCodeInput = {
    errorType: string
    errorMessage?: string | null
    resolved?: boolean
    platform?: RedemptionPlatformCreateNestedOneWithoutErrorLogsInput
  }

  export type ErrorLogUncheckedCreateWithoutCodeInput = {
    errorId?: number
    errorType: string
    errorMessage?: string | null
    platformId?: number | null
    resolved?: boolean
  }

  export type ErrorLogCreateOrConnectWithoutCodeInput = {
    where: ErrorLogWhereUniqueInput
    create: XOR<ErrorLogCreateWithoutCodeInput, ErrorLogUncheckedCreateWithoutCodeInput>
  }

  export type ErrorLogCreateManyCodeInputEnvelope = {
    data: ErrorLogCreateManyCodeInput | ErrorLogCreateManyCodeInput[]
    skipDuplicates?: boolean
  }

  export type RecheckScheduleCreateWithoutCodeInput = {
    scheduledDate: Date | string
    priority?: $Enums.Priority
    completed?: boolean
  }

  export type RecheckScheduleUncheckedCreateWithoutCodeInput = {
    scheduleId?: number
    scheduledDate: Date | string
    priority?: $Enums.Priority
    completed?: boolean
  }

  export type RecheckScheduleCreateOrConnectWithoutCodeInput = {
    where: RecheckScheduleWhereUniqueInput
    create: XOR<RecheckScheduleCreateWithoutCodeInput, RecheckScheduleUncheckedCreateWithoutCodeInput>
  }

  export type RecheckScheduleCreateManyCodeInputEnvelope = {
    data: RecheckScheduleCreateManyCodeInput | RecheckScheduleCreateManyCodeInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithWhereUniqueWithoutMovieCodesInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutMovieCodesInput, MovieUncheckedUpdateWithoutMovieCodesInput>
    create: XOR<MovieCreateWithoutMovieCodesInput, MovieUncheckedCreateWithoutMovieCodesInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutMovieCodesInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutMovieCodesInput, MovieUncheckedUpdateWithoutMovieCodesInput>
  }

  export type MovieUpdateManyWithWhereWithoutMovieCodesInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutMovieCodesInput>
  }

  export type VendorUpsertWithoutMovieCodesInput = {
    update: XOR<VendorUpdateWithoutMovieCodesInput, VendorUncheckedUpdateWithoutMovieCodesInput>
    create: XOR<VendorCreateWithoutMovieCodesInput, VendorUncheckedCreateWithoutMovieCodesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMovieCodesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMovieCodesInput, VendorUncheckedUpdateWithoutMovieCodesInput>
  }

  export type VendorUpdateWithoutMovieCodesInput = {
    vendorName?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateWithoutMovieCodesInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorName?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUpsertWithoutMovieCodesInput = {
    update: XOR<StudioUpdateWithoutMovieCodesInput, StudioUncheckedUpdateWithoutMovieCodesInput>
    create: XOR<StudioCreateWithoutMovieCodesInput, StudioUncheckedCreateWithoutMovieCodesInput>
    where?: StudioWhereInput
  }

  export type StudioUpdateToOneWithWhereWithoutMovieCodesInput = {
    where?: StudioWhereInput
    data: XOR<StudioUpdateWithoutMovieCodesInput, StudioUncheckedUpdateWithoutMovieCodesInput>
  }

  export type StudioUpdateWithoutMovieCodesInput = {
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateWithoutMovieCodesInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    studioName?: StringFieldUpdateOperationsInput | string
    redemptionBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type SaleUpsertWithoutCodeInput = {
    update: XOR<SaleUpdateWithoutCodeInput, SaleUncheckedUpdateWithoutCodeInput>
    create: XOR<SaleCreateWithoutCodeInput, SaleUncheckedCreateWithoutCodeInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutCodeInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutCodeInput, SaleUncheckedUpdateWithoutCodeInput>
  }

  export type SaleUpdateWithoutCodeInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer?: CustomerUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutCodeInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CodePlatformAvailabilityUpsertWithWhereUniqueWithoutCodeInput = {
    where: CodePlatformAvailabilityWhereUniqueInput
    update: XOR<CodePlatformAvailabilityUpdateWithoutCodeInput, CodePlatformAvailabilityUncheckedUpdateWithoutCodeInput>
    create: XOR<CodePlatformAvailabilityCreateWithoutCodeInput, CodePlatformAvailabilityUncheckedCreateWithoutCodeInput>
  }

  export type CodePlatformAvailabilityUpdateWithWhereUniqueWithoutCodeInput = {
    where: CodePlatformAvailabilityWhereUniqueInput
    data: XOR<CodePlatformAvailabilityUpdateWithoutCodeInput, CodePlatformAvailabilityUncheckedUpdateWithoutCodeInput>
  }

  export type CodePlatformAvailabilityUpdateManyWithWhereWithoutCodeInput = {
    where: CodePlatformAvailabilityScalarWhereInput
    data: XOR<CodePlatformAvailabilityUpdateManyMutationInput, CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeInput>
  }

  export type ValidationHistoryUpsertWithWhereUniqueWithoutCodeInput = {
    where: ValidationHistoryWhereUniqueInput
    update: XOR<ValidationHistoryUpdateWithoutCodeInput, ValidationHistoryUncheckedUpdateWithoutCodeInput>
    create: XOR<ValidationHistoryCreateWithoutCodeInput, ValidationHistoryUncheckedCreateWithoutCodeInput>
  }

  export type ValidationHistoryUpdateWithWhereUniqueWithoutCodeInput = {
    where: ValidationHistoryWhereUniqueInput
    data: XOR<ValidationHistoryUpdateWithoutCodeInput, ValidationHistoryUncheckedUpdateWithoutCodeInput>
  }

  export type ValidationHistoryUpdateManyWithWhereWithoutCodeInput = {
    where: ValidationHistoryScalarWhereInput
    data: XOR<ValidationHistoryUpdateManyMutationInput, ValidationHistoryUncheckedUpdateManyWithoutCodeInput>
  }

  export type ErrorLogUpsertWithWhereUniqueWithoutCodeInput = {
    where: ErrorLogWhereUniqueInput
    update: XOR<ErrorLogUpdateWithoutCodeInput, ErrorLogUncheckedUpdateWithoutCodeInput>
    create: XOR<ErrorLogCreateWithoutCodeInput, ErrorLogUncheckedCreateWithoutCodeInput>
  }

  export type ErrorLogUpdateWithWhereUniqueWithoutCodeInput = {
    where: ErrorLogWhereUniqueInput
    data: XOR<ErrorLogUpdateWithoutCodeInput, ErrorLogUncheckedUpdateWithoutCodeInput>
  }

  export type ErrorLogUpdateManyWithWhereWithoutCodeInput = {
    where: ErrorLogScalarWhereInput
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyWithoutCodeInput>
  }

  export type RecheckScheduleUpsertWithWhereUniqueWithoutCodeInput = {
    where: RecheckScheduleWhereUniqueInput
    update: XOR<RecheckScheduleUpdateWithoutCodeInput, RecheckScheduleUncheckedUpdateWithoutCodeInput>
    create: XOR<RecheckScheduleCreateWithoutCodeInput, RecheckScheduleUncheckedCreateWithoutCodeInput>
  }

  export type RecheckScheduleUpdateWithWhereUniqueWithoutCodeInput = {
    where: RecheckScheduleWhereUniqueInput
    data: XOR<RecheckScheduleUpdateWithoutCodeInput, RecheckScheduleUncheckedUpdateWithoutCodeInput>
  }

  export type RecheckScheduleUpdateManyWithWhereWithoutCodeInput = {
    where: RecheckScheduleScalarWhereInput
    data: XOR<RecheckScheduleUpdateManyMutationInput, RecheckScheduleUncheckedUpdateManyWithoutCodeInput>
  }

  export type RecheckScheduleScalarWhereInput = {
    AND?: RecheckScheduleScalarWhereInput | RecheckScheduleScalarWhereInput[]
    OR?: RecheckScheduleScalarWhereInput[]
    NOT?: RecheckScheduleScalarWhereInput | RecheckScheduleScalarWhereInput[]
    scheduleId?: IntFilter<"RecheckSchedule"> | number
    codeId?: IntFilter<"RecheckSchedule"> | number
    scheduledDate?: DateTimeFilter<"RecheckSchedule"> | Date | string
    priority?: EnumPriorityFilter<"RecheckSchedule"> | $Enums.Priority
    completed?: BoolFilter<"RecheckSchedule"> | boolean
  }

  export type MovieCodeCreateWithoutSalesInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutSalesInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutSalesInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutSalesInput, MovieCodeUncheckedCreateWithoutSalesInput>
  }

  export type CustomerCreateWithoutSalesInput = {
    customerName?: string | null
    email?: string | null
    phone?: string | null
    totalPurchases?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerUncheckedCreateWithoutSalesInput = {
    customerId?: number
    customerName?: string | null
    email?: string | null
    phone?: string | null
    totalPurchases?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerCreateOrConnectWithoutSalesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
  }

  export type MovieCodeUpsertWithoutSalesInput = {
    update: XOR<MovieCodeUpdateWithoutSalesInput, MovieCodeUncheckedUpdateWithoutSalesInput>
    create: XOR<MovieCodeCreateWithoutSalesInput, MovieCodeUncheckedCreateWithoutSalesInput>
    where?: MovieCodeWhereInput
  }

  export type MovieCodeUpdateToOneWithWhereWithoutSalesInput = {
    where?: MovieCodeWhereInput
    data: XOR<MovieCodeUpdateWithoutSalesInput, MovieCodeUncheckedUpdateWithoutSalesInput>
  }

  export type MovieCodeUpdateWithoutSalesInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutSalesInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type CustomerUpsertWithoutSalesInput = {
    update: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateWithoutSalesInput = {
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CustomerUncheckedUpdateWithoutSalesInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MovieCodeCreateWithoutAvailabilitiesInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutAvailabilitiesInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutAvailabilitiesInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutAvailabilitiesInput, MovieCodeUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type RedemptionPlatformCreateWithoutAvailabilitiesInput = {
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    validationHistory?: ValidationHistoryCreateNestedManyWithoutPlatformInput
    errorLogs?: ErrorLogCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformUncheckedCreateWithoutAvailabilitiesInput = {
    platformId?: number
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutPlatformInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformCreateOrConnectWithoutAvailabilitiesInput = {
    where: RedemptionPlatformWhereUniqueInput
    create: XOR<RedemptionPlatformCreateWithoutAvailabilitiesInput, RedemptionPlatformUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type MovieCodeUpsertWithoutAvailabilitiesInput = {
    update: XOR<MovieCodeUpdateWithoutAvailabilitiesInput, MovieCodeUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<MovieCodeCreateWithoutAvailabilitiesInput, MovieCodeUncheckedCreateWithoutAvailabilitiesInput>
    where?: MovieCodeWhereInput
  }

  export type MovieCodeUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: MovieCodeWhereInput
    data: XOR<MovieCodeUpdateWithoutAvailabilitiesInput, MovieCodeUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type MovieCodeUpdateWithoutAvailabilitiesInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutAvailabilitiesInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type RedemptionPlatformUpsertWithoutAvailabilitiesInput = {
    update: XOR<RedemptionPlatformUpdateWithoutAvailabilitiesInput, RedemptionPlatformUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<RedemptionPlatformCreateWithoutAvailabilitiesInput, RedemptionPlatformUncheckedCreateWithoutAvailabilitiesInput>
    where?: RedemptionPlatformWhereInput
  }

  export type RedemptionPlatformUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: RedemptionPlatformWhereInput
    data: XOR<RedemptionPlatformUpdateWithoutAvailabilitiesInput, RedemptionPlatformUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RedemptionPlatformUpdateWithoutAvailabilitiesInput = {
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    validationHistory?: ValidationHistoryUpdateManyWithoutPlatformNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutPlatformNestedInput
  }

  export type RedemptionPlatformUncheckedUpdateWithoutAvailabilitiesInput = {
    platformId?: IntFieldUpdateOperationsInput | number
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutPlatformNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type MovieCodeCreateWithoutValidationHistoryInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutValidationHistoryInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutValidationHistoryInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutValidationHistoryInput, MovieCodeUncheckedCreateWithoutValidationHistoryInput>
  }

  export type RedemptionPlatformCreateWithoutValidationHistoryInput = {
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutPlatformInput
    errorLogs?: ErrorLogCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformUncheckedCreateWithoutValidationHistoryInput = {
    platformId?: number
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutPlatformInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformCreateOrConnectWithoutValidationHistoryInput = {
    where: RedemptionPlatformWhereUniqueInput
    create: XOR<RedemptionPlatformCreateWithoutValidationHistoryInput, RedemptionPlatformUncheckedCreateWithoutValidationHistoryInput>
  }

  export type MovieCodeUpsertWithoutValidationHistoryInput = {
    update: XOR<MovieCodeUpdateWithoutValidationHistoryInput, MovieCodeUncheckedUpdateWithoutValidationHistoryInput>
    create: XOR<MovieCodeCreateWithoutValidationHistoryInput, MovieCodeUncheckedCreateWithoutValidationHistoryInput>
    where?: MovieCodeWhereInput
  }

  export type MovieCodeUpdateToOneWithWhereWithoutValidationHistoryInput = {
    where?: MovieCodeWhereInput
    data: XOR<MovieCodeUpdateWithoutValidationHistoryInput, MovieCodeUncheckedUpdateWithoutValidationHistoryInput>
  }

  export type MovieCodeUpdateWithoutValidationHistoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutValidationHistoryInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type RedemptionPlatformUpsertWithoutValidationHistoryInput = {
    update: XOR<RedemptionPlatformUpdateWithoutValidationHistoryInput, RedemptionPlatformUncheckedUpdateWithoutValidationHistoryInput>
    create: XOR<RedemptionPlatformCreateWithoutValidationHistoryInput, RedemptionPlatformUncheckedCreateWithoutValidationHistoryInput>
    where?: RedemptionPlatformWhereInput
  }

  export type RedemptionPlatformUpdateToOneWithWhereWithoutValidationHistoryInput = {
    where?: RedemptionPlatformWhereInput
    data: XOR<RedemptionPlatformUpdateWithoutValidationHistoryInput, RedemptionPlatformUncheckedUpdateWithoutValidationHistoryInput>
  }

  export type RedemptionPlatformUpdateWithoutValidationHistoryInput = {
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutPlatformNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutPlatformNestedInput
  }

  export type RedemptionPlatformUncheckedUpdateWithoutValidationHistoryInput = {
    platformId?: IntFieldUpdateOperationsInput | number
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutPlatformNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type MovieCodeCreateWithoutErrorLogsInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutErrorLogsInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    recheckSchedules?: RecheckScheduleUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutErrorLogsInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutErrorLogsInput, MovieCodeUncheckedCreateWithoutErrorLogsInput>
  }

  export type RedemptionPlatformCreateWithoutErrorLogsInput = {
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutPlatformInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformUncheckedCreateWithoutErrorLogsInput = {
    platformId?: number
    platformName: string
    platformCode: string
    redemptionUrl?: string | null
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutPlatformInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type RedemptionPlatformCreateOrConnectWithoutErrorLogsInput = {
    where: RedemptionPlatformWhereUniqueInput
    create: XOR<RedemptionPlatformCreateWithoutErrorLogsInput, RedemptionPlatformUncheckedCreateWithoutErrorLogsInput>
  }

  export type MovieCodeUpsertWithoutErrorLogsInput = {
    update: XOR<MovieCodeUpdateWithoutErrorLogsInput, MovieCodeUncheckedUpdateWithoutErrorLogsInput>
    create: XOR<MovieCodeCreateWithoutErrorLogsInput, MovieCodeUncheckedCreateWithoutErrorLogsInput>
    where?: MovieCodeWhereInput
  }

  export type MovieCodeUpdateToOneWithWhereWithoutErrorLogsInput = {
    where?: MovieCodeWhereInput
    data: XOR<MovieCodeUpdateWithoutErrorLogsInput, MovieCodeUncheckedUpdateWithoutErrorLogsInput>
  }

  export type MovieCodeUpdateWithoutErrorLogsInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutErrorLogsInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type RedemptionPlatformUpsertWithoutErrorLogsInput = {
    update: XOR<RedemptionPlatformUpdateWithoutErrorLogsInput, RedemptionPlatformUncheckedUpdateWithoutErrorLogsInput>
    create: XOR<RedemptionPlatformCreateWithoutErrorLogsInput, RedemptionPlatformUncheckedCreateWithoutErrorLogsInput>
    where?: RedemptionPlatformWhereInput
  }

  export type RedemptionPlatformUpdateToOneWithWhereWithoutErrorLogsInput = {
    where?: RedemptionPlatformWhereInput
    data: XOR<RedemptionPlatformUpdateWithoutErrorLogsInput, RedemptionPlatformUncheckedUpdateWithoutErrorLogsInput>
  }

  export type RedemptionPlatformUpdateWithoutErrorLogsInput = {
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutPlatformNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutPlatformNestedInput
  }

  export type RedemptionPlatformUncheckedUpdateWithoutErrorLogsInput = {
    platformId?: IntFieldUpdateOperationsInput | number
    platformName?: StringFieldUpdateOperationsInput | string
    platformCode?: StringFieldUpdateOperationsInput | string
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutPlatformNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type MovieCodeCreateWithoutRecheckSchedulesInput = {
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieCreateNestedManyWithoutMovieCodesInput
    vendor: VendorCreateNestedOneWithoutMovieCodesInput
    studio?: StudioCreateNestedOneWithoutMovieCodesInput
    sales?: SaleCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeUncheckedCreateWithoutRecheckSchedulesInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
    movies?: MovieUncheckedCreateNestedManyWithoutMovieCodesInput
    sales?: SaleUncheckedCreateNestedOneWithoutCodeInput
    availabilities?: CodePlatformAvailabilityUncheckedCreateNestedManyWithoutCodeInput
    validationHistory?: ValidationHistoryUncheckedCreateNestedManyWithoutCodeInput
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutCodeInput
  }

  export type MovieCodeCreateOrConnectWithoutRecheckSchedulesInput = {
    where: MovieCodeWhereUniqueInput
    create: XOR<MovieCodeCreateWithoutRecheckSchedulesInput, MovieCodeUncheckedCreateWithoutRecheckSchedulesInput>
  }

  export type MovieCodeUpsertWithoutRecheckSchedulesInput = {
    update: XOR<MovieCodeUpdateWithoutRecheckSchedulesInput, MovieCodeUncheckedUpdateWithoutRecheckSchedulesInput>
    create: XOR<MovieCodeCreateWithoutRecheckSchedulesInput, MovieCodeUncheckedCreateWithoutRecheckSchedulesInput>
    where?: MovieCodeWhereInput
  }

  export type MovieCodeUpdateToOneWithWhereWithoutRecheckSchedulesInput = {
    where?: MovieCodeWhereInput
    data: XOR<MovieCodeUpdateWithoutRecheckSchedulesInput, MovieCodeUncheckedUpdateWithoutRecheckSchedulesInput>
  }

  export type MovieCodeUpdateWithoutRecheckSchedulesInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutRecheckSchedulesInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeCreateManyVendorInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    studioId?: number | null
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
  }

  export type MovieCodeUpdateWithoutVendorInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutVendorInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateManyWithoutVendorInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieCreateManyStudioInput = {
    movieId?: number
    title: string
    releaseYear?: number | null
    rating?: string | null
    quality?: $Enums.Quality | null
    runtimeMinutes?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type MovieCodeCreateManyStudioInput = {
    codeId?: number
    code: string
    quality: $Enums.Quality
    status?: $Enums.CodeStatus
    isBundle?: boolean
    bundleTitle?: string | null
    vendorId: number
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    sellingPrice?: Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: string | null
    isVerified?: boolean
    lastVerifiedAt?: Date | string | null
    vendorOrderId?: string | null
  }

  export type MovieUpdateWithoutStudioInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutStudioInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieCodes?: MovieCodeUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutStudioInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCodeUpdateWithoutStudioInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateManyWithoutMovieCodesNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutStudioInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUncheckedUpdateManyWithoutMovieCodesNestedInput
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateManyWithoutStudioInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CodePlatformAvailabilityCreateManyPlatformInput = {
    availabilityId?: number
    codeId: number
    isValid?: boolean
  }

  export type ValidationHistoryCreateManyPlatformInput = {
    validationId?: number
    codeId: number
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
  }

  export type ErrorLogCreateManyPlatformInput = {
    errorId?: number
    codeId?: number | null
    errorType: string
    errorMessage?: string | null
    resolved?: boolean
  }

  export type CodePlatformAvailabilityUpdateWithoutPlatformInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    code?: MovieCodeUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type CodePlatformAvailabilityUncheckedUpdateWithoutPlatformInput = {
    availabilityId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CodePlatformAvailabilityUncheckedUpdateManyWithoutPlatformInput = {
    availabilityId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValidationHistoryUpdateWithoutPlatformInput = {
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    code?: MovieCodeUpdateOneWithoutValidationHistoryNestedInput
  }

  export type ValidationHistoryUncheckedUpdateWithoutPlatformInput = {
    validationId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValidationHistoryUncheckedUpdateManyWithoutPlatformInput = {
    validationId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ErrorLogUpdateWithoutPlatformInput = {
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    code?: MovieCodeUpdateOneWithoutErrorLogsNestedInput
  }

  export type ErrorLogUncheckedUpdateWithoutPlatformInput = {
    errorId?: IntFieldUpdateOperationsInput | number
    codeId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ErrorLogUncheckedUpdateManyWithoutPlatformInput = {
    errorId?: IntFieldUpdateOperationsInput | number
    codeId?: NullableIntFieldUpdateOperationsInput | number | null
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieCodeUpdateWithoutMoviesInput = {
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: VendorUpdateOneRequiredWithoutMovieCodesNestedInput
    studio?: StudioUpdateOneWithoutMovieCodesNestedInput
    sales?: SaleUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateWithoutMoviesInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    sales?: SaleUncheckedUpdateOneWithoutCodeNestedInput
    availabilities?: CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeNestedInput
    validationHistory?: ValidationHistoryUncheckedUpdateManyWithoutCodeNestedInput
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutCodeNestedInput
    recheckSchedules?: RecheckScheduleUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type MovieCodeUncheckedUpdateManyWithoutMoviesInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    isBundle?: BoolFieldUpdateOperationsInput | boolean
    bundleTitle?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: IntFieldUpdateOperationsInput | number
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sellingPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redemptionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleCreateManyCustomerInput = {
    saleId?: number
    codeId: number
    saleDate?: Date | string
    salePrice: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    netProfit: Decimal | DecimalJsLike | number | string
  }

  export type SaleUpdateWithoutCustomerInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: MovieCodeUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutCustomerInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleUncheckedUpdateManyWithoutCustomerInput = {
    saleId?: IntFieldUpdateOperationsInput | number
    codeId?: IntFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CodePlatformAvailabilityCreateManyCodeInput = {
    availabilityId?: number
    platformId: number
    isValid?: boolean
  }

  export type ValidationHistoryCreateManyCodeInput = {
    validationId?: number
    platformId?: number | null
    validationDate?: Date | string
    isValid: boolean
    validationMethod?: string | null
  }

  export type ErrorLogCreateManyCodeInput = {
    errorId?: number
    errorType: string
    errorMessage?: string | null
    platformId?: number | null
    resolved?: boolean
  }

  export type RecheckScheduleCreateManyCodeInput = {
    scheduleId?: number
    scheduledDate: Date | string
    priority?: $Enums.Priority
    completed?: boolean
  }

  export type MovieUpdateWithoutMovieCodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studio?: StudioUpdateOneWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieCodesInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyWithoutMovieCodesInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableEnumQualityFieldUpdateOperationsInput | $Enums.Quality | null
    runtimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodePlatformAvailabilityUpdateWithoutCodeInput = {
    isValid?: BoolFieldUpdateOperationsInput | boolean
    platform?: RedemptionPlatformUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type CodePlatformAvailabilityUncheckedUpdateWithoutCodeInput = {
    availabilityId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CodePlatformAvailabilityUncheckedUpdateManyWithoutCodeInput = {
    availabilityId?: IntFieldUpdateOperationsInput | number
    platformId?: IntFieldUpdateOperationsInput | number
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValidationHistoryUpdateWithoutCodeInput = {
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: RedemptionPlatformUpdateOneWithoutValidationHistoryNestedInput
  }

  export type ValidationHistoryUncheckedUpdateWithoutCodeInput = {
    validationId?: IntFieldUpdateOperationsInput | number
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValidationHistoryUncheckedUpdateManyWithoutCodeInput = {
    validationId?: IntFieldUpdateOperationsInput | number
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    validationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    validationMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ErrorLogUpdateWithoutCodeInput = {
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    platform?: RedemptionPlatformUpdateOneWithoutErrorLogsNestedInput
  }

  export type ErrorLogUncheckedUpdateWithoutCodeInput = {
    errorId?: IntFieldUpdateOperationsInput | number
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ErrorLogUncheckedUpdateManyWithoutCodeInput = {
    errorId?: IntFieldUpdateOperationsInput | number
    errorType?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    platformId?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecheckScheduleUpdateWithoutCodeInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecheckScheduleUncheckedUpdateWithoutCodeInput = {
    scheduleId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecheckScheduleUncheckedUpdateManyWithoutCodeInput = {
    scheduleId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    completed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}