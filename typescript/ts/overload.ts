interface AddOperation {
    addition(p1: number, p2: number): number;
    addition(p1: string, p2: string): number;


}


const f: AddOperation = {
    addition(p1: number | string, p2: number | string) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        } else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }

        //needs an error to throw to avoid returning undefined
        throw new Error("invaild input!");
        //but you will never see this err message above
    }
};

console.log(f.addition('3', '2'));
