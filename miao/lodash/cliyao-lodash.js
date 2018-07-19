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
  //给定一个数组与其他数组，删除第一个数组中与其他数组相同的元素，并返回该数组。
  difference:function(array,...values){
      var nums=[]
      var nums1=[].concat(...values)
      for(i=0;i<array.length;i++){
          if(nums1.indexOf(array[i])===-1){
            nums.push(array[i])
          }
      }
      return nums
  },
  //Creates a slice of array with n elements dropped from the beginning.
  drop:function(array,n=1){
      return array.slice(n)
  },
  //Creates a slice of array with n elements dropped from the end.
  dropRight:function(array,n=1){
      return array.length-n<0?[]:array.slice(0,array.length-n)
  },

  //Fills elements of array with value from start up to, but not including, end.
  fill:function(array, value, start=0, end=array.length){
      for(i=start;i<end;i++){
        array[i]=value
      }
      return array
  },

  //Gets the first element of array.
  head:function(array){
      return array.length===0?undefined:array[0]
  },
  //Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
  indexOf:function(array, value, fromIndex=0){
      for(i=fromIndex;i<array.length;i++){
        if(array[i]===value){
          return i
        }
      }
      return []
  },
  //Gets all but the last element of array.
  initial:function(array){
      return array.splice(0,array.length-1)
  },
  //Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
  intersection:function([arrays]){
      var nums=[arrays].pop()
      var nums1=[].concat(...arrays)
      var nums2=[]
      for(i=0;i<nums.length;i++){
        if(nums1.indexOf(nums[i])!==-1){
          nums2.push(nums[i])
        }
      }
      return nums
  },






}

