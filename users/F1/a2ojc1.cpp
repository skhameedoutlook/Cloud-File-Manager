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
    ll n, m;
    cin>>n>>m;
    if(m > (n*2 +2) || (m < n-1)) {
    	cout << -1 << endl;
    	return 0;
	}
	ll cnt = 0;
	string s = "";
	while(!(m <= 0 && n <= 0)) {
		if(cnt == 2) {
			if(n > 0) {
				s += "0";
				n--;
			}
		}
		else {
			if(m > 0) {
				s += "1";
				m--;
			}
		}
		cnt = (cnt+1)%3;
	}
	cout << s << endl;
	
    return 0;
}

