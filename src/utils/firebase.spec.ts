import {FirebaseApp} from '@app/utils/firebase';

describe('FirebaseApp Test', () => {
  beforeAll(() => {
    const app = FirebaseApp.getApp();
  });

  test('access firebase-server', async () => {
    const snap = await FirebaseApp.getDB().ref('testData').once('value');
    const result = snap.val();
    expect(result).toEqual({'example': 'foo'});
  });

  test('forbidden', async () => {
    return expect(FirebaseApp.getDB().ref('LimitedAccess/forbidden').once('value')).rejects.toThrow('permission_denied');
  });

  test('signIn', async () => {
    await FirebaseApp.getAuth().signInWithEmailAndPassword('nakatanakatana@gmail.com', 'password');
    console.log('currentUser', FirebaseApp.getAuth().currentUser);
    const snap = await FirebaseApp.getDB().ref('LimitedAccess/signIn').once('value');
    console.log('snap');
    const result = snap.val();
    console.log(result);
    expect(result).toEqual({'piyo': 'piyo'});
  });
});
