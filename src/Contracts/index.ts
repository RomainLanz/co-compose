/**
 * co-compose
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export type IMiddlewareFn <T extends any[]> = (...params: T) => Promise<void>
export type IMiddlewareResolve<T extends any[]> = (fn: any, params: T) => void
