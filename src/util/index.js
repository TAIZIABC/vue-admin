/**
 *模糊查询功能函数
 * @params:keyword String  搜索关键字
 * @params:arr     Array   匹配的原数组
 */
export const fuzzySearch = function(keyword,arr=[],key){
  if(!keyword) return arr;
  let result = [];
  let reg = new RegExp(keyword);
  arr.forEach((item)=>{
    if(typeof item!=='object'&&item.match(reg)){
      result.push(item)
    }else if(typeof item==='object'&&item[key].match(reg)){
      result.push(item)
    }
  });
  return result;
};
