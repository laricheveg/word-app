import UtilsController from './utils';

import * as db from '../models';

var sem = require('semaphore')(5);

export default class UserWordController extends UtilsController {

  public model = db.Word;
  public user = db.User;

  constructor() {
    super();
    super._setParams({ 'model': this.model });
  }

  count = (req, res) => {
    return super._count(req, res, this.model, {});
  }

  findAndCountAll = (req, res) => {
    return super._findAndCountAll(req, res, this.model, {
      order: [
        ['id', 'ASC']
      ],
    });
  }

  findAll = (req, res) => {
    return super._findAll(req, res, this.model, {
      order: [
        ['id', 'ASC']
      ],
    });
  }

  findById = (req, res) => {
    var userId = req['userObj'].id;

    this.model.findAll({
      where: {
        userId: userId,
      },
      attributes: ['name', 'count'],
      order: [['name', 'DESC']],
    }).then(data => {
      console.log(data)
      res.status(203).json(data);
    })
  }

  findOne = (req, res) => {
    return super._findOne(req, res, this.model, {
      //where: {fieldName: 'myNeedle'}
    });
  }

  create = (req, res) => {
    return super._create(req, res, this.model, {
      userId: req['userObj'].id,
      active: req.body.active,
      title: req.body.title,
      deadline: req.body.deadline,
      done: req.body.done,
    });
  }

  update = (req, res) => {
    var _this = this;

    let wordsArray = req.body.string.split(" ");
    var userId = req['userObj'].id;

    let counts = {};
    let promises = [];

    for (var k = 0; k < wordsArray.length; k++) {
      var num = wordsArray[k];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }


    for (var word in counts) {
      promises.push(this.updateWords(word, counts, userId, req, _this ));
    }

    Promise.all(promises)
      .then((results) => {
        _this.model.findAll({
          where: {
            userId: userId,
          },
          attributes: ['name', 'count'],
          order: [
            ['name', 'DESC'],
        ],
        }).then(data => {
          console.log(data)
          res.status(200).json(data);
        })
      })
      .catch((e) => {
        console.log(e)

      });


  }

  destroy = (req, res) => {
    var userId = req['userObj'].id;

    return super._destroy(req, res, this.model, {
      where: {
        userId: userId
      }
    });
  }


  private updateWords(word, counts, userId, req, _this) {
    return new Promise((resolve) => {

      sem.take(function () {

        _this.model.findOne({
          where: {
            $col: db.sequelize.where(db.sequelize.fn('lower', db.sequelize.col('name')), db.sequelize.fn('lower', word)),
            userId: userId,
          }
        }).then(result => {

          if (!result) {
            _this.model.create(
              {
                userId: req['userObj'].id,
                name: word,
                count: counts[word],
              }).then(() => {
                sem.leave();
                resolve();
              })
          }

          else {
            result.update(
              {
                count: result.count + counts[word],
              }).then(() => {
                sem.leave();
                resolve();
              })
          }

        })

      })
    })
  }

}