# sms2-amd

An [AMD module](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition) containing the sequence alignment functionality from [Sequence Manipulation Suite](http://www.bioinformatics.org/sms2/) by Paul Stothard (University of Alberta, Canada).

## Usage

See [pairwise\_align.js](https://github.com/boland/sms2-amd/blob/master/pairwise_align.js) for an example alignment function that uses AlignPairLinear.

```javascript
pairwise = require('path/to/pairwise_align');
alignment = pairwise.align("AGTACGTAC","GTAC")
console.log(alignment.getAlignedM())
console.log(alignment.getAlignedN())
console.log(alignment.score)
```

## License

Please see the original sms2 [LICENSE](https://github.com/boland/sms2-amd/blob/master/LICENSE) file.