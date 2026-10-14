import lenaImg from '../assets/avatars/lena.jpg';
import sophiaImg from '../assets/avatars/sophia.jpg';
import jamesImg from '../assets/avatars/james.jpg';
import isabellaImg from '../assets/avatars/isabella.jpg';
import williamImg from '../assets/avatars/william.jpg';

export const currentUser = {
  name: 'Lena Williams',
  id: '1094881999',
  avatar: lenaImg,
  role: 'Student',
  department: 'Computer Science & Engineering',
  batch: 'CSE B 2022'
};

export const onlineUsers = [
  {
    id: '1094882001',
    name: 'Sophia Chen',
    avatar: sophiaImg,
    status: 'online',
    major: 'Computer Science'
  },
  {
    id: '1094672000',
    name: 'James Miller',
    avatar: jamesImg,
    status: 'online',
    major: 'Computer Science'
  },
  {
    id: '1094342003',
    name: 'Isabella Garcia',
    avatar: isabellaImg,
    status: 'online',
    major: 'Information Technology'
  },
  {
    id: '1094662002',
    name: 'William Brown',
    avatar: williamImg,
    status: 'online',
    major: 'Computer Science'
  }
];
