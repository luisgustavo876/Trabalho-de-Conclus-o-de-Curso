import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  // constructor(private afAuth: AngularFireAuth) {}

// loginWithGoogle() {
//   this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
//     .then((result) => {
//       // O usuário fez login com sucesso.
//       console.log('Usuário autenticado: ', result.user);
//     })
//     .catch((error) => {
//       // Trate erros, se houver algum.
//       console.error('Erro ao autenticar com o Google: ', error);
//     });
// }

  ngOnInit() {
  }

}
