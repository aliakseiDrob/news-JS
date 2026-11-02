import { Callback, Paths, HttpMethods, Request } from '../../types/types';
import { ResponseStatus } from '../../types/types';
class Loader {
    constructor(
        private readonly baseLink: string,
        private readonly options: Record<string, string>
    ) {}

    protected getResp<T>(
        { endpoint, options = {} }: Request,
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === ResponseStatus.Unauthorized || res.status === ResponseStatus.NotFound) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: Record<string, string>, path: Paths) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${path}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: HttpMethods, path: Paths, callback: Callback<T>, options = {}) {
        fetch(this.makeUrl(options, path), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}
export default Loader;
