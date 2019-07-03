// カレンダークラス
// @example
// [
//    [   ,   ,   ,   ,   ,   ,  1],
//    [  2,  3,  4,  5,  6,  7,  8],
//    [  9, 10, 11, 12, 13, 14, 15],
//    [ 16, 17, 18, 19, 20, 21, 22],
//    [ 23, 24, 25, 26, 27, 28, 29],
//    [ 30, 31,   ,   ,   ,   ,   ]
// ]
//
class Calendar {
  private today: Date;
  public year: number;
  public month: number;
  public dates: any;

  constructor() {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth() + 1;
    this.dates = [];
    this.make();
  }

  public returnToday(): Calendar {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth() + 1;
    this.dates = [];
    this.make();
    return this;
  }

  public nextMonth(): Calendar {
    const date = new Date(this.year, this.month, 1);
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.dates = [];
    this.make();
    return this;
  }

  public previousMonth(): Calendar {
    const date = new Date(this.year, this.month - 2, 1);
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.dates = [];
    this.make();
    return this;
  }

  private make(): void {
    const WEEK = 7;

    let thisMonthDateCount = 1;
    const thisMonth1stDay = new Date(this.year, this.month - 1, 1).getDay();
    const thisMonthLastDate = new Date(this.year, this.month, 0).getDate();

    const lastMonthLastDate = new Date(this.year, this.month - 1, 0).getDate();
    let lastMonthDateCount = lastMonthLastDate;
    const recursiveCalcDate = (index: number) => {
      if (index === 0) { return; }
      index -= 1;
      this.dates[0][index] = new DateCell(new Date(this.year, this.month - 2, lastMonthDateCount), false);
      lastMonthDateCount -= 1;
      if (index > 0) { recursiveCalcDate(index); }
      return;
    }
    let nextMonthDateCount = 1;

    for (let i = 0; thisMonthDateCount <= thisMonthLastDate; i++) {
      this.dates[i] = new Array(WEEK);
      for (let j = 0; j < WEEK; j++) {
        // 第1週
        if (i === 0) {
          if (j >= thisMonth1stDay) {
            this.dates[i][j] = new DateCell(new Date(this.year, this.month - 1, thisMonthDateCount), true);
            thisMonthDateCount += 1;
            if (j === thisMonth1stDay) {
              recursiveCalcDate(j);
            }
          }
        } else {
          if (thisMonthDateCount > thisMonthLastDate) {
            this.dates[i][j] = new DateCell(new Date(this.year, this.month, nextMonthDateCount), false);
            nextMonthDateCount += 1;
          } else {
            this.dates[i][j] = new DateCell(new Date(this.year, this.month - 1, thisMonthDateCount), true);
            thisMonthDateCount += 1;
          }
        }
      }
    }
  }
}

class DateCell {
  public day: number;
  public month: number;
  public year: number;
  public isActive: boolean;

  constructor(date: any, isActive: boolean) {
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.isActive = isActive;
  }

  public getZeroPaddingMonth(): string {
    return ('00' + this.month).slice(-2);
  }

  public getZeroPaddingDay(): string {
    return ('00' + this.day).slice(-2);
  }
}

export { Calendar as CalendarModel };
