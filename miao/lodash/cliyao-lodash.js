var cliyao = {
  //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  chunk: function(array, size = 1) {
      var result = [];
      for (var i = 0; i < array.length; i += size) {
          result.push(array.slice(i, size + i));
      }
      return result;
  },
  //创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
  compact: function(array) {
      var result = [];
      for (var i = 0; i < array.length; i++) {
          if (array[i]) {
              result.push(array[i]);
          }
      }
      return result;
  },