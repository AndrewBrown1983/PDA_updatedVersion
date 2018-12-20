require("minitest/autorun")
require("minitest/rg")
require_relative("../card")
require_relative("../testing_task_2")

class CardGameTest < Minitest::Test

def setup()
  cards = [@card1, @card2]
  @card1 = Card.new("spades", 1)
  @card2 = Card.new("diamonds", 5)
  @game = CardGame.new(cards)
end



def test_checkforAce

  result = @game.checkforAce(@card2)
  assert_equal(false, result)
end

def test_highest_card()

  result = @game.highest_card(@card1, @card2)
  assert_equal("#{@card2.value} #{@card2.suit}", result)
end

def test_cards_total()
  result = @game.cards_total()
  assert_equal("You have a total of 6", result)
end

end
