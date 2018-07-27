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
  //Converts all elements in array into a string separated by separator.
  join:function(array, separator=','){
      var result=""
      for(i=0;i<array.length;i++){
        result+=array[i]+separator
      }

      return result.slice(0,result.length-1)
  },

  //Gets the last element of array.
  last:array=>array[array.length-1],
  //This method is like _.indexOf except that it iterates over elements of array from right to left.
  lastIndexOf:function(array, value, fromIndex=array.length-1){
      for(i=fromIndex;i>=0;i--){
        if(array[i]===value){
          return i
        }
      }
  },
  //Gets the element at index n of array. If n is negative, the nth element from the end is returned.
  nth:function(array,n){
    n>=0?n=>array[n]:n=>array[array.length+n]
  },
  //Removes all given values from array using SameValueZero for equality comparisons.
  pull:function(array, ...values){
      var nums="".concat(...values)
      for(i=0;i<array.length;i++){
        if(nums.includes(array[i])){
          array.splice(i,1)
          i--
        }
      }
  },
  //This method is like _.pull except that it accepts an array of values to remove.
  pullAll:function(array, ...values){
      var nums=[].concat(...values)
      for(i=0;i<array.length;i++){
        if(nums.includes(array[i])){
          array.splice(i,1)
          i--
        }
      }
  },
  //移除数组中predicate返回为真值的所有元素，并返回移除元素组成的数组。predicate会传入3个参数： (value, index, array)。 

  remove:function(array, predicate=_.identity){
      var nums=[]
      for(i=0;i<array.length;i++){
        if(array[i]%2===0){
          nums.push(array[i])
        }
      }
      return nums
  },

  //反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。 
  reverse:function(array, predicat){
    var ary=[]
    for(i=array.length-1;i>=0;i--){
        ary.push(array[i])
    }
    return ary
  },
  //裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。 
  slice:function(array, start=0, end=array.length){
    var ary=[]
    for(i=start;i<end;i++){
      ary.push(array[i])
    }
    return ary
  },
  //使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
  sortedIndex:function(array, value){
    for(i=0;i<array.length;i++){
      if(array[i]>=value){
        return i
      }
    }
  },
  //这个方法类似 _.indexOf，除了它是在已经排序的数组array上执行二进制检索。
  sortedIndexOf:function(array, value){
    for(i=0;i<array.length;i++){
      if(array[i]>=value){
        return i
      }
    }
  },
  //此方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。
  sortedLastIndex:function(array, value){
     for(i=array.length-1;i>=0;i--){
      if(array[i]<=value){
        return i+1
      }
    }
  },
  //这个方法类似 _.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。
  sortedLastIndexOf:function(array, value){
     for(i=array.length-1;i>=0;i--){
      if(array[i]===value){
        return i
      }
    }
    return -1
  },
  //这个方法类似 _.uniq，除了它会优化排序数组。
   sortedUniq : function(array){
      var map={}
      var nums=[]
      for(i=0;i<array.length;i++){
        if(!map[array[i]]){
          map[array[i]]=1
        }else{
          map[array[i]]++
        }
        if(map[array[i]]===1){
          nums.push(array[i])
        }
      }
      return nums
  },
  //获取除了array数组第一个元素以外的全部元素。
  tail:array => array.slice(1),
  //创建一个数组切片，从array数组的起始元素开始提取n个元素。
  take:function(array, n=1){
    return array.slice(0,n)
  },
  //创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
  takeRight:function(array, n=1){
    return array.slice(array.length-n)
  },

  //创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。
  union:function(...arrays){
    var nums=[].concat(...arrays)
    var map={}
      var nums1=[]
      for(i=0;i<nums.length;i++){
        if(!map[nums[i]]){
          map[nums[i]]=1
        }else{
          map[nums[i]]++
        }
        if(map[nums[i]]===1){
          nums1.push(array[i])
        }
      }
      return nums1
  },
  //创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
  uniq:function(array){
    var map={}
      var nums=[]
      for(i=0;i<array.length;i++){
        if(!map[array[i]]){
          map[array[i]]=1
        }else{
          map[array[i]]++
        }
        if(map[array[i]]===1){
          nums.push(array[i])
        }
      }
      return nums
  },
  //创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。 
  without:function(array, ...values){
      var nums=[].concat(...values)
      var nums1=[]
      for(i=0;i<nums.length;i++){
        map[nums[i]]=~~map[nums[i]]+1
      }
      for(i=0;i<array.length;i++){
        if(!map[array[i]]){
          nums1.push(array[i])
        }
      }
      return nums1
  },
  //创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
  xor:function(...arrays){
      var map={}
      var nums=[].comcat(...arrays)
      var nums1=[]

      for(i=0;i<nums.length;i++){
        map[nums[i]]=~~map[nums[i]]+1
      }

      for(var key in map){
        if(map[key]===1){
          nums1.push(key)
        }
      }
      return nums1
  },
  //这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
  zipObject:function(props=[], values=[]){
      var map={}
      if(props===[]||values===[]){
        return {}
      }

      for(i=0;i<props.length;i++){
        map[props[i]]=values[i]
      }
      return map
  },

  //两个数相加。
  add:function(augend, addend){
      return augend+addend
  },

  differenceBy:function(array, values,iteratee){
    return array.filter(a=>!(iteratee(a) in values.map(b=>iteratee(b))))
  },

  differenceWith:function(array, values, comparator){
      return array.filter(item=>!values.some(it=>comparator(it,item)))
  },

  flatten:function flatten(array){
      return [].concat(...array)
  },

  flattenDepth:function(array, depth=1){
      for(i=0;i<depth;i++){
        return flatten(array)
      }
  },

  flattenDeep:function flattenDeep(array) {
    return flattenDepth(array, Infinity)
  },

  isNil:function(value){
    if(value===null||value===undefined||value===0){
      return true
    }else{
      return false
    }
  },

  isNull:function(value){
      if(value===null){
        return true
      }else{
        return false
      }
  },

  isNumber:function(value){
    if(typeof(value)==="number"){
      return true
    }else{
      return false
    }
  },

  isObject:function(value){
    if(typeof(value)==="object"&&value!==null){
      return true
    }else{
      return false
    }
  },

  isObjectLike:function(value){
    if(value!==null&&typeof(value)==="object"){
      return true
    }else{
      return false
    }
  },

  isPlainObject:function(value){
    if(value._proto_===object.prototype||value._proto_===null){
      return true
    }else{
      return false
    }
  },










}
