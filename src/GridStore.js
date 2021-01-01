
export class GridStore {
  /**
   * @type {Map<string, Array[Muuri]>}
   */
  store;
  
  constructor() {
    this.store = new Map();
  }
  
  /**
   * @param {string} groupId
   * @param {Muuri} grid
   */
  addGrid(groupId, grid) {
    const groupIdString = groupId+'';
    if (!this.store.has(groupIdString)) {
      this.store.set(groupIdString+'', []);
    }
    this.store.get(groupIdString).push(grid);
  }
  
  /**
   * @param {Array<string>} groupIds
   * @param {Muuri} grid
   */
  addGridToGroups(groupIds, grid) {
    groupIds.forEach(groupId => this.addGrid(groupId, grid));
  }
  
  /**
   * @param {string|Array<string>} group
   * @returns {*}
   */
  getGrids(group) {
    if (Array.isArray(group)) {
      let groups = [];
      group.forEach((groupy) => groups = groups.concat(this.store.get((groupy+''))));
      return groups;
    }
  
    const groupIdString = group+'';
    return this.store.get(groupIdString);
  }
}

export default new GridStore();