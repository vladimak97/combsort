// Write a JavaScript program to sort a list of elements using Comb sort.

/* The Comb Sort is a variant of the Bubble Sort. The basic idea is to eliminate turtles, 
or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. */

// Solution: 

function combSort(arr) {
    const gapShrinkFactor = 1.3;
  
    let gap = arr.length;
    let swapped = true;
  
    while (gap > 1 || swapped) {
      gap = Math.floor(gap / gapShrinkFactor);
      if (gap < 1) {
        gap = 1;
      }

      swapped = false;
  
      for (let i = 0; i + gap < arr.length; i++) {
        if (arr[i] > arr[i + gap]) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
          swapped = true;
        }
      }
    }
  }
  
  const unsortedArray = [10, 5, 8, 2, 7, 1, 3, 9, 4, 6];
  combSort(unsortedArray);
  console.log(unsortedArray);
  
  