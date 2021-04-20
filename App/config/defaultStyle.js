import color from './color';

export default {
  feedContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  leftFeedContainer: {
    marginRight: 10,
  },
  imageProfile: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  RightFeedContainer: {
    flex: 1,
  },
  feedUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingRight: 5,
  },
  userHandle: {
    color: color.darkGray,
    paddingLeft: 5,
    textTransform: 'lowercase',
    fontWeight: '500',
  },
  userTime: {
    color: color.darkGray,
    fontWeight: '500',
  },
  tweets: {
    lineHeight: 20,
    fontSize: 14,
    color: color.dark,
  },

  feedInteraction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  itemSepator: {
    height: 0.3,
    backgroundColor: color.darkGray,
    marginVertical: 5,
  },
};
