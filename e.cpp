#include<bits/stdc++.h>
using namespace std;
int findmax(int index,vector<int>&arr){
    if(index==arr.size()-1){
        return arr[index];
    }
    return max(arr[index],findmax(index+1,arr));
}
int findmaxb(int index,vector<int>&arr){
    if(index==0){
        return arr[index];
    }
    return max(arr[index],findmax(index-1,arr));
}

int main(){
    int n;
    cin >> n;
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin >> arr[i];
    }
    int maxi=findmaxb(arr.size()-1,arr);
    cout << maxi << endl;
}