function arrayFilter(arr, func) {
    let answerArr = arr.filter(func);
    return answerArr[0] ? answerArr[0] : undefined;
  }