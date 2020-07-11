#include <iostream>
#include <bits/stdc++.h>
#define t97 1000000007

using namespace std;
typedef long long ll;

void dm(vector<vector<ll> >& m) {
    for(ll i = 0; i < m.size(); i++) {
        for(ll j = 0; j < m[i].size(); j++) {
            if(j != m[i].size()-1) {
                cout << m[i][j] << " ";
            } 
            else {
                cout << m[i][j] << endl;
            }
        }
    }
}

void dv(vector<ll>& v) {
    for(ll i = 0; i < v.size()-1; i++) {
        cout << v[i]<<" ";
    }
    cout << v[v.size()-1]<<endl;
}

void swap(ll& a, ll& b) {
    ll temp = a;
    a = b;
    b = temp;
}

ll minval(ll a, ll b) {
    if(a < b) {
        return a;
    }
    return b;
}

ll maxval(ll a, ll b) {
    if(a > b) {
        return a;
    }
    return b;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // For getting input from input.txt file 
    freopen("input.txt", "r", stdin); 
  
    // Printing the Output to output.txt file 
//    freopen("output.txt", "w", stdout); 
    
    return 0;
}
