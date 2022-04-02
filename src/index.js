function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i],
      j = i - 1;
    while (temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log("res==", arr);
}

insertionSort([8, 6, 5, 4, 3, 2]);
