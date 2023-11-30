/**
 * (#)class-one.mjs 1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

/**
 * The first class.
 */

class ClassOne {
    constructor() {
        this._myName = "My name is Class One";
    }

    methodOne(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodOne: ${value}`);
                resolve(130);
            }, 130);
        });
    }

    methodTwo(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodTwo: ${value}`);
                resolve(120);
            }, 120);
        });
    }

    methodThree(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodThree: ${value}`);
                resolve(110);
            }, 110);
        });
    }
}

export { ClassOne };
