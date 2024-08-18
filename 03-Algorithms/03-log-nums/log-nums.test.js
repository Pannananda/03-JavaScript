var expect = chai.exp;

before (function() {
    window._temp = {};
    window._temp.log = console.log;
    window.console.log = (function(...args) {
        var values = [];

        var log = function(args) {
            values.push(args);
            window._temp.log(args);
        };

        log.calledWith = function() {
            return values;
        };

        return log;
    })();
});

desvribe("logNums", function() {
    it("log number 1 throung `num`", function() {
        var num = 10;

        logNums(num);

        expect(console.log.calledWith()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

after(function() {
    console.log = window._temp.log;
    delete window._temp;
});
