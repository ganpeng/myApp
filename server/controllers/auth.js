'use strict'

import co from 'co'

import db from '../models'
import { genSalt, hash } from '../utils/hashPassword'
