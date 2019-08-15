import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import CharacterItem from '../CharacterItem';
import styles from './styles';

export default class CharactersList extends Component {
  onCharacterPressed = character => {
    this.props.itemPressCallback(character);
  }

  render() {
    return (
      <Container>
        <FlatList 
          data={this.props.characters}
          keyExtractor = {character => {
            return character.characterId.toString()
          }}
          renderItem={characterDetails => {
            return <CharacterItem styles={styles.item} character={characterDetails.item} onPress={this.onCharacterPressed} />
          }}
        />
      </Container>
    );
  }
}
