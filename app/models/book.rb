class Book < ApplicationRecord
  belongs_to :writer
  has_many :chapters
end
