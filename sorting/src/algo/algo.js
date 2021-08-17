export function getMergeSort( array ){
    const animations =[];
    if( array.length <= 1 ) return array;
    const temp = array.slice();
    mergeSort(array, temp, 0, array.length-1, animations);
    return animations;
}
export function getBubbleSort( array ){
    const animations =[];
    if ( array.length <=1 ) return array;
    bubbleSort(array,  0, array.length-1, animations);
    return animations;
}
export function getQuickSort( array ){
    const animations =[];
    if ( array.length <=1 ) return array;
    quickSort(array,  0, array.length-1, animations);
    return animations;
}
export function getInsertionSort( array ){
    const animations =[];
    if ( array.length <=1 ) return array;
    insertionSort(array,  0, array.length-1, animations);
    return animations;
}
export function getSelectionSort( array ){
    const animations =[];
    if ( array.length <=1 ) return array;
    selectionSort(array,  0, array.length-1, animations);
    return animations;
}

function selectionSort( a, left, right, animations){
    for(let i= left  ; i<right ; i++ ){
        let mn_indx = i;
        for( let j=i+1 ; j<=right ; j++ ){
            if( a[mn_indx] > a[j] ){
                mn_indx=j;
            }
        }
        animations.push([mn_indx,i]);
        animations.push([mn_indx,i]);
        animations.push([mn_indx,i]);
        let temp = a[i];
        a[i] = a[mn_indx];
        a[mn_indx]= temp;
        
    }
    return animations;
}
function insertionSort( a, left, right, animations){
    for(let i= left + 1 ; i<=right ; i++ ){
        let key = a[i]; 
        let j=1;
        for( j=i-1 ; j>=left ; j-- ){
            if( a[j] > key ){
                animations.push([j+1,j]);
                animations.push([j+1,j]);
                animations.push([j+1,a[j]]);
                a[j+1] = a[j];
            }
            else
                break;
        }
        animations.push([j+1,i]);
        animations.push([j+1,i]);
        animations.push([j+1,key]);
        a[j+1] = key;
    }
    return animations;
}
function quickSort( array, left, right, animations){
    if( left >= right )
        return;
    let mid= Math.floor(left+(right-left)/2); 
    let pivot = array[mid];
    let indx = partition( array, left, right, pivot, animations);
    quickSort(array, left, indx-1, animations);
    quickSort(array, indx, right, animations);
}
function partition(array, left, right, pivot, animations){
    while( left<=right){
        while ( array[left] < pivot )
            left++;
        while ( array[right] > pivot )
            right--;
        if( left <= right ){
            animations.push([left,right]);
            animations.push([left,right]);
            animations.push([left,right]);
            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            left++;
            right--;
        }
    }
    return left;
}
function bubbleSort(array, start , end, animations){
    for( let i=start ; i<=end ; i++ ){
        for( let j=end ; j>i ; j-- ){
            animations.push([j,j-1]);
            animations.push([j,j-1]);
            if ( array[j] <= array[j-1]){
                animations.push([j-1,j]);
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1]= temp;
            }
            else
                animations.push([j,j]);
        }
    }
}

function mergeSort( array, temp, start, end, animations){
    if(start >= end)
        return;
    const mid= Math.floor(start+(end-start)/2);
    mergeSort(temp, array, start, mid, animations);
    mergeSort(temp, array, mid+1, end, animations);
    mergeHalves(array, temp, start, end, animations);
}
function mergeHalves( array, temp, start, end, animations){
    const mid= Math.floor(start+(end-start)/2);
    let leftEnd= mid;
    let rightStart  = leftEnd+1;

    let left = start;
    let right = rightStart;  
    let indx = start;

    while( left <= leftEnd && right <= end ){
        animations.push([left, right]);
        animations.push([left, right]);
        if ( temp[left] <= temp[right]){
            animations.push([indx, temp[left]]);
            array [indx++] = temp[left++];
        }
        else{
            animations.push([indx, temp[right]]);
            array[indx++] = temp[right++];
        }
    }
    while( left <= leftEnd ){
        animations.push([left, left]);
        animations.push([left, left]);
        animations.push([indx, temp[left]]);
        array [indx++] = temp[left++];
    }
    while( right <= end ){
        animations.push([right, right]);
        animations.push([right, right]);
        animations.push([indx, temp[right]]);
        array[indx++] = temp[right++];
    }
}

