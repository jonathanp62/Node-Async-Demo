/**
 * (#)class-two.mjs 1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

/**
 * The second class.
 */

class ClassTwo {
    constructor() {
        this._myName = "My name is Class Two";
    }

    methodOne(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodOne: ${value}`);
                resolve(80);
            }, 80);
        });
    }

    methodTwo(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodTwo: ${value}`);
                resolve(60);
            }, 60);
        });
    }

    methodThree(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodThree: ${value}`);
                resolve(70);
            }, 70);
        });
    }
}

export { ClassTwo };
