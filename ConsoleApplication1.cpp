#include <iostream>
#include <thread>
#include <ctime>
#include <vector>

using namespace std;

void editline(int i, vector<vector<int>> a, vector<int> v, vector<int> *res, int n) {
	int sum = 0;
	for (int j = 0; j < n; j++) {
		sum += a[i][j] * v[j];
	}
	(*res)[i] = sum;
}

int main()
{
	srand(time(NULL));

	int n = thread::hardware_concurrency();

	vector<thread> th;
	th.resize(n);

	vector<vector<int>> mtr;
	vector<int> vec;
	vector<int> res;

	int size;
	cin >> size;

	res.resize(size);
	vec.resize(size);
	for (int i = 0; i < size; i++) {
		vec[i] = rand() % 100;
	}
	mtr.resize(size);
	for (int i = 0; i < size; i++) {
		mtr[i].resize(size);
		for (int j = 0; j < size; j++) {
			mtr[i][j] = rand() % 100;
		}
	}

	for (int i = 0; i < size; i += n) {

		for (int t = 0; t < n; t++) {
			if (i + t < size) {
				th[t]=thread(editline,i + t, mtr, vec, &res, size);
			}
		}
	}

	for (int t = 0; t < n; t++) {
		th[t].join();
	}

	for (int i = 0; i < size; i++) {
		cout << res[i] << ' ';
	}

	return 0;
}
