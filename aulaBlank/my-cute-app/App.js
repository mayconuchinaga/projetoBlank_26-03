import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Style from './components/style';

export default function App() {
  return (
    <div className='App'>
      <main>
        <section id='about'>
          <h1>Maycon</h1>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0z1oCMtvvXfbPS_neuHlaZhEZ4GHKYoJOg&s'></img>
          <p>Sou o Maycon, amo a beyoncé, musica, especialmente r&b, amo dançar, adoro cozinhar e fazer bolo que é minha especialidade.</p>
        </section>
      </main>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
