class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :time
  has_one :user
end
