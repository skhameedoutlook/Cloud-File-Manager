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

ll getlefth(ll x, ll y, ll a, ll b) {
	
		return b*x;

}

ll getrighth(ll x, ll y, ll a, ll b) {
	
		return (y-b-1)*x;
	
}

ll gettoph(ll x, ll y, ll a, ll b) {
	return a*y;
}

ll getboth(ll x, ll y, ll a, ll b) {
	return (x-a-1)*y;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
//    freopen("input.txt", "r", stdin); 
//    freopen("output.txt", "w", stdout); 
	ll t, a, b, x, y;
	cin>>t;
	while(t--) {
		cin>>a>>b>>x>>y;
		ll temp1 = getlefth(a, b, x, y);
		ll temp2 = getrighth(a, b, x, y);
		ll temp3 = gettoph(a, b, x, y);
		ll temp4 = getboth(a, b, x, y);
		ll ans = -1;
		ans = maxval(temp1, ans);
		ans = maxval(temp2, ans);
		ans = maxval(temp3, ans);
		ans = maxval(temp4, ans);
		cout << ans << endl;
	}
    
    return 0;
}
