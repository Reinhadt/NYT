const responseTransformer = (records, message, success=true) => {
  let items;
  const {total=1, data} = records
  if(Array.isArray(data)){
    items = {
      count: data.length,
      total,
      pages: Math.ceil(total/10),
      items: data
    }
  }else{
    items = data
  }

  return {
    success,
    data: items,
    status:{
      code: 200,
      message
    }
  }
}

userResponseTransformer = (records, message, success=true) => {
  return {
    success,
    data: records,
    status: {
      code: 200,
      message,
    }
  }
}

module.exports = {
  responseTransformer,
  userResponseTransformer,
}