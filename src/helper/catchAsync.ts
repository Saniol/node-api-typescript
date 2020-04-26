type AsyncFunction = (...args: any[]) => Promise<any>;
type CatchFunction = (error: Error) => any;

export default (execFunction: AsyncFunction, catchFunction: CatchFunction) => (
  ...args: any[]
) => execFunction(...args).catch(catchFunction);
