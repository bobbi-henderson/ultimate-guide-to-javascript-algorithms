function rangeSum(arr) {
    let answer = [];
    for (i = arr[0]; i <= arr[1]; i++) {
      answer.push(i);
    }
    return answer.reduce((acc, num) => acc + num, 0);
  }