import * as DNA from './dist/dna-es5';

class getCountTest {
    count() {
            let count = DNA.getCount('ACTG');

            document.querySelector('#count-placeholder').innerHTML = count;
        }
}


var c = new getCountTest();
c.count();
