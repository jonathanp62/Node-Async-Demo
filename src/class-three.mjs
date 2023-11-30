/**
 * (#)class-three.mjs   1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

/**
 * The third class.
 */

class ClassThree {
    constructor() {
        this._myName = "My name is Class Three";
    }

    methodOne(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodOne: ${value}`);
                resolve(150);
            }, 150);
        });
    }

    methodTwo(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodTwo: ${value}`);
                resolve(140);
            }, 140);
        });
    }

    methodThree(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this._myName}: Message from methodThree: ${value}`);
                resolve(130);
            }, 30);
        });
    }
}

export { ClassThree };
