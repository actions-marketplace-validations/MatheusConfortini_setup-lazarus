import * as cache from "@actions/cache";
import * as core from "@actions/core";

import { Cache } from './Cache';

import { _version } from './constants';

async function run(): Promise<void> {

    // `with-cache` input defined in action metadata file
    let withCache = core.getInput('with-cache') == 'true';

    try {
        let installCache = new Cache(withCache);
        await installCache.save();
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

export default run;
