import Loader from './loader';
import { getEnvVariable } from '../../utils/utils';

class AppLoader extends Loader {
    constructor() {
        const checkedApiUrl = getEnvVariable(process.env.API_URL, 'API Url');
        const checkedApiKey = getEnvVariable(process.env.API_KEY, 'API Key');
        super(checkedApiUrl, {
            apiKey: checkedApiKey,
        });
    }
}

export default AppLoader;
