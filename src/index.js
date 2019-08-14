import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Post from '~/components/Post';

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    width: '90%',
    height: '100%',
    marginTop: 60,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f88',
  },
});

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: Math.random(),
          titulo: 'Post 1',
          autor: 'Wallace Saturnino',
          descricao:
            'Invidunt dolor dolor invidunt et clita et no dolor. Amet sanctus amet lorem et. Rebum erat sea sit vero diam..',
        },
        {
          id: Math.random(),
          titulo: 'Post 2',
          autor: 'Laura Carvalho',
          descricao:
            'Door some morrow from soul that soul. At smiling many napping into least name wretch. My pallid reply muttered whether this at leave parting. To lamplight bust heard have the, if by my open.',
        },
        {
          id: Math.random(),
          titulo: 'Post 3',
          autor: 'Messias Anticristo',
          descricao:
            'Deziris la velo ne ni mangxis volas la, sorton mia ia fontaj kion vi mi. Ia nagxi lin ke surmaron diris veloj gxin sed. Vidus mordis diris kaj.',
        },
        {
          id: Math.random(),
          titulo: 'Post 1',
          autor: 'Wallace Saturnino',
          descricao:
            'Invidunt dolor dolor invidunt et clita et no dolor. Amet sanctus amet lorem et. Rebum erat sea sit vero diam..',
        },
        {
          id: Math.random(),
          titulo: 'Post 2',
          autor: 'Laura Carvalho',
          descricao:
            'Door some morrow from soul that soul. At smiling many napping into least name wretch. My pallid reply muttered whether this at leave parting. To lamplight bust heard have the, if by my open.',
        },
        {
          id: Math.random(),
          titulo: 'Post 3',
          autor: 'Messias Anticristo',
          descricao:
            'Deziris la velo ne ni mangxis volas la, sorton mia ia fontaj kion vi mi. Ia nagxi lin ke surmaron diris veloj gxin sed. Vidus mordis diris kaj.',
        },
        {
          id: Math.random(),
          titulo: 'Post 1',
          autor: 'Wallace Saturnino',
          descricao:
            'Invidunt dolor dolor invidunt et clita et no dolor. Amet sanctus amet lorem et. Rebum erat sea sit vero diam..',
        },
        {
          id: Math.random(),
          titulo: 'Post 2',
          autor: 'Laura Carvalho',
          descricao:
            'Door some morrow from soul that soul. At smiling many napping into least name wretch. My pallid reply muttered whether this at leave parting. To lamplight bust heard have the, if by my open.',
        },
        {
          id: Math.random(),
          titulo: 'Post 3',
          autor: 'Messias Anticristo',
          descricao:
            'Deziris la velo ne ni mangxis volas la, sorton mia ia fontaj kion vi mi. Ia nagxi lin ke surmaron diris veloj gxin sed. Vidus mordis diris kaj.',
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.postContainer}>
            {posts.map(post => (
              <Post postInfo={post} key={post.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
