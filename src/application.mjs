/**
 * (#)application.mjs   1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { ClassOne } from "./class-one.mjs";
import { ClassTwo } from "./class-two.mjs";
import { ClassThree } from "./class-three.mjs";

/**
 * The application class.
 */
class Application {
    /**
     * The run method.
     */
    run() {
	    const promise = new Promise(resolve => {
            console.log('Beginning to run');
            resolve(0);
        });

        const classOne = new ClassOne();
        const classTwo = new ClassTwo();
        const classThree = new ClassThree();

        promise
            .then(value => classOne.methodOne(value))
            .then(value => classOne.methodTwo(value))
            .then(value => classOne.methodThree(value))
            .then(value => classTwo.methodOne(value))
            .then(value => classTwo.methodTwo(value))
            .then(value => classTwo.methodThree(value))
            .then(value => classThree.methodOne(value))
            .then(value => classThree.methodTwo(value))
            .then(value => classThree.methodThree(value))
            .then(value => console.log(`Ending the run with the last value: ${value}`));
    }
}

export { Application };
